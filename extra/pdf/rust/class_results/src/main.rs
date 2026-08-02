mod student;

use lopdf::Document;
use std::{error::Error, fs::File, io::prelude::*, process::exit};
use student::Student;

type BoxedResult<T> = Result<T, Box<dyn Error>>;

const OUT_PATH: &str = "out.txt";
const RESULT_PATH: &str = "result.txt";
const EXTRA_STR: &str = "Grupo +praTI e Codifica - Dev Full Stack";

fn main() -> BoxedResult<()> {
    exit_on_cached_result();

    let content = read_pdf()?;
    let students = parse_students(content);
    let output = format_output(students);

    println!("{}", &output);
    save_output(&output)?;

    Ok(())
}

fn read_pdf() -> BoxedResult<String> {
    if let Ok(mut file) = File::open(OUT_PATH) {
        let mut lines = String::new();
        file.read_to_string(&mut lines)
            .expect("could not read cache lines");
        return Ok(lines);
    }

    let doc = Document::load("Demonstrativo Turma 2 - 2026.pdf")?;
    let pages = doc.get_pages();
    let page_numbers: Vec<u32> = pages.keys().cloned().collect();
    let text = doc.extract_text(&page_numbers)?;

    let mut output_file = File::create(OUT_PATH)?;
    output_file.write_all(text.as_bytes())?;

    Ok(text)
}

fn parse_students(content: String) -> Vec<Student> {
    let (_, content) = content.split_once("Total").expect("content not found");
    let filtered = filter_content(content);
    let students: Vec<Student> = Student::from_whole_content(filtered);

    students
}

fn filter_content(content: &str) -> String {
    content
        .split("\n")
        .filter(|&line| is_line_valid(line))
        .collect()
}

fn is_line_valid(line: &str) -> bool {
    let line = line.trim();
    !line.is_empty() && !line.chars().next().unwrap().is_numeric() && line.ne(EXTRA_STR)
}

fn format_output(students: Vec<Student>) -> String {
    let longest_name = students.iter().map(|s| s.name.len()).max().unwrap_or(10);
    let linelen = longest_name + 57; // newline, spaces and content
    let mut output = String::with_capacity(linelen * students.len());

    output.push_str(&format!(
        "| {0: <width$} | {1: ^10} | {2: ^10} | {3: ^10} | {4: ^10} |\n",
        "Nome do Aluno",
        "Atividades",
        "Presenças",
        "Podcasts",
        "Total",
        width = longest_name
    ));
    output.push_str(&format!("{}\n", "#".repeat(linelen - 1)));

    students.iter().for_each(|s| {
        output.push_str(&format!(
            "| {0: <width$} | {1: ^10} | {2: ^10} | {3: ^10} | {4: ^10} |\n",
            s.name,
            s.tasks,
            s.presence,
            s.podcasts,
            s.total,
            width = longest_name
        ));
    });

    output
}

fn save_output(output: &String) -> BoxedResult<()> {
    let mut result_file = File::create(RESULT_PATH)?;
    result_file.write_all(&output.clone().into_bytes())?;

    Ok(())
}

fn exit_on_cached_result() {
    let file = File::open(RESULT_PATH);
    if file.is_err() {
        return;
    }

    let mut file = file.unwrap();
    let mut content = String::new();

    let len = file
        .read_to_string(&mut content)
        .expect("file content must be utf-8");
    if len == 0 {
        return;
    }

    println!("{}", content);
    exit(0);
}

