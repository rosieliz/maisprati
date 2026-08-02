use lopdf::Document;
use regex::Regex;
use std::{error::Error, fs::File, io::prelude::*};

type PdfResult<T> = Result<T, Box<dyn Error>>;

#[derive(Debug)]
struct Student {
    name: String,
    tasks: String,
    presence: String,
    podcasts: String,
    total: String,
}

fn main() -> PdfResult<()> {
    let lines = read_pdf()?;
    let students = parse_lines(lines)?;
    let output = format_output(students);

    println!("{}", &output);

    let mut result_file = File::create("result.txt")?;
    result_file.write_all(&output.into_bytes())?;

    Ok(())
}

fn read_pdf() -> PdfResult<String> {
    if let Ok(mut file) = File::open("out.txt") {
        let mut lines = String::new();
        file.read_to_string(&mut lines)
            .expect("could not read cache lines");
        return Ok(lines);
    }

    let doc = Document::load("Demonstrativo Turma 2 - 2026.pdf")?;

    if doc.is_encrypted() {
        println!("Decripting document...");

        if doc.encryption_state.is_some() {
            println!("Successfully decrypted with empty password");
        }
    }

    let pages = doc.get_pages();
    let page_numbers: Vec<u32> = pages.keys().cloned().collect();
    let text = doc.extract_text(&page_numbers)?;

    let mut output_file = File::create("out.txt")?;
    output_file.write_all(text.as_bytes())?;

    Ok(text)
}

fn parse_lines(lines: String) -> std::io::Result<Vec<Student>> {
    let (_, data) = lines.split_once("Total").expect("content not found");
    let lines = data.trim().replace("\n\n", " ");

    let name_pattern = Regex::new(r"[^0-9.]\w+").unwrap();
    let grade_pattern = Regex::new(r"(\d+\.\d?|-)").unwrap();
    let pagenum_pattern = Regex::new(r"^\d+$").unwrap();

    let mut student_name = String::new();
    let mut student_grades: Vec<Option<f32>> = vec![];
    let mut students: Vec<Student> = vec![];

    let parse_grade = |grade: Option<f32>| -> String {
        match grade {
            Some(g) => format!("{:.1}", g),
            None => "-".to_string(),
        }
    };

    let long_line = lines
        .replace(",", ".")
        .split("\n")
        .collect::<String>()
        .replace("Grupo +praTI e Codifica - Dev Full Stack", "");

    for ln in long_line.split(" ") {
        let ln = ln.trim();

        if ln.is_empty() || pagenum_pattern.is_match(ln) {
            continue;
        };

        if name_pattern.is_match(ln) {
            student_name.push_str(&format!("{} ", ln));
        } else if grade_pattern.is_match(ln) {
            let grade = ln;
            if grade == "-" {
                student_grades.push(None);
            } else {
                let grade: f32 = grade.parse().expect("failed to parse grade");
                student_grades.push(Some(grade));
            }
        }

        if student_grades.len() == 4 {
            let grades: Vec<String> = student_grades.iter().map(|&g| parse_grade(g)).collect();
            students.push(Student {
                name: student_name.trim().to_owned(),
                tasks: grades[0].to_owned(),
                presence: grades[1].to_owned(),
                podcasts: grades[2].to_owned(),
                total: grades[3].to_owned(),
            });
            student_name.clear();
            student_grades.clear();
        }
    }

    Ok(students)
}

fn format_output(students: Vec<Student>) -> String {
    let longest_name = students.iter().map(|s| s.name.len()).max().unwrap_or(10);
    let linelen = longest_name + 57; // newline, spaces and separators
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
    output.push_str(&format!("{:#<width$}\n", "", width = linelen - 1));

    students.iter().for_each(|student| {
        let Student {
            name,
            tasks,
            presence,
            podcasts,
            total,
        } = student;
        output.push_str(&format!(
            "| {0: <width$} | {1: ^10} | {2: ^10} | {3: ^10} | {4: ^10} |\n",
            name,
            tasks,
            presence,
            podcasts,
            total,
            width = longest_name
        ));
    });

    output
}

