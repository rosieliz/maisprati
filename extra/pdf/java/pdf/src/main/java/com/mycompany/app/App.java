package com.mycompany.app;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.List;
import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.*;

public class App {
    private static String cachePath = "out.txt";
    private static String[] extraTexts = new String[] { "Grupo +praTI e Codifica - Dev Full Stack" };

    public static void main(String[] args) throws IOException {
        checkCachedResultAndExitProgram();

        String lines = readPdf();
        Student[] students = parseStudents(lines);
        String output = formatOutput(students);

        System.out.println(output);

        saveResult(output);
    }

    private static String readPdf() throws IOException {
        File cache = new File(cachePath);
        if (cache.exists() && cache.toString().trim().length() > 0) {
            return readFromCache(cache);
        }

        File source = new File("Demonstrativo Turma 2 - 2026.pdf");
        PDDocument document = PDDocument.load(source);
        PDFTextStripper stripper = new PDFTextStripper();
        String text = stripper.getText(document);
        document.close();

        String splitTarget = "Total \n";
        int indexToSplit = text.indexOf(splitTarget) + splitTarget.length();
        String splittedText = text.substring(indexToSplit);
        String filteredText = filterContent(splittedText.replace(",", ".").split("\n"));

        writeCache(filteredText);
        return filteredText;
    }

    private static String readFromCache(File cache) throws IOException, FileNotFoundException {
        String content = "";
        Scanner scanner = new Scanner(cache);

        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            content += String.format("%s\n", line);
        }
        scanner.close();

        return content;
    }

    private static void writeCache(String content) throws IOException {
        FileWriter writer = new FileWriter(cachePath);
        writer.write(content);
        writer.close();
    }

    private static String[] filterLines(String content) {
        List<String> lines = Arrays.asList(content.split("\n"));
        List<String> filteredLines = lines.stream().filter(line -> validateLine(line)).collect(Collectors.toList());

        return filteredLines.toArray(new String[0]);
    }

    private static String filterContent(String[] content) {
        return String.join("\n", content);
    }

    private static boolean validateLine(String line) {
        return 
            line.trim().length() > 0 &&
            !Character.isDigit(line.charAt(0)) &&
            !Arrays.asList(extraTexts).contains(line.trim());
    }

    private static Student[] parseStudents(String content) {
        String[] filteredLines = filterLines(content);
        Student[] students = Arrays.stream(filteredLines).map(line -> Student.fromLine(line)).toArray(size -> new Student[size]);
        return students;
    }

    private static String formatOutput(Student[] students) {
        int longestName = Arrays.stream(students).map(student -> student.name.length()).max(Comparator.naturalOrder()).get();
        int lineLength = longestName + 57; // newline, separators and content
        String lineFormat = "| %-" + longestName + "s | %-10s | %-10s | %-10s | %-10s |\n";

        String output = new String();

        output += String.format(
            lineFormat,
            "Nome",
            centerString("Atividades"),
            centerString("Presenças"),
            centerString("Podcasts"),
            centerString("Total")
        );
        output += String.format("%s\n", "#".repeat(lineLength - 1));

        for (Student s : students) {
            output += String.format(
                lineFormat,
                centerString(s.name),
                centerString(s.tasks),
                centerString(s.presence),
                centerString(s.podcasts),
                centerString(s.total)
            );
        }

        return output;
    }

    private static String centerString(String item) {
        int width = 10;
        int padding = (width - item.length()) / 2;
        StringBuilder builder = new StringBuilder();

        for (int i = 0; i < padding; i++) {
            builder.append(" ");
        }
        builder.append(item);
        for (int i = 0; i < padding; i++) {
            builder.append(" ");
        }

        return builder.toString();
    }

    private static void saveResult(String output) throws IOException {
        FileWriter writer = new FileWriter("result.txt");
        writer.write(output);
        writer.close();
    }

    private static void checkCachedResultAndExitProgram() throws IOException {
        File result = new File("result.txt");
        if (!result.exists() || result.toString().trim().length() == 0) return;

        BufferedReader reader = new BufferedReader(new FileReader("result.txt"));
        String line = "";
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
        reader.close();
        System.exit(0);
    }
}

