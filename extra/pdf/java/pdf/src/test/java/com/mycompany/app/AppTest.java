package com.mycompany.app;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.IOException;
import java.io.File;
import java.util.Arrays;
import java.util.regex.*;
import java.util.stream.Collectors;


/**
 * Unit test for simple App.
 */
public class AppTest {

    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue() {
        assertTrue(true);
    }

    @Test
    public void comparePdfOutput() throws IOException {
      String expectedText = "Grupo +praTI e Codifica - Dev Full Stack";
      File file = new File("Demonstrativo Turma 2 - 2026.pdf");
      PDDocument document = PDDocument.load(file);
      PDFTextStripper stripper = new PDFTextStripper();
      String text = stripper.getText(document);
      document.close();

      // System.out.println(text);

      assertTrue(text.contains(expectedText));
    }

    @Test
    public void studentRegex() {
        String line = "Akanni Obatayie Machado Silva 6.0 7.0 - 13.0 ";
        Matcher nameMatches = Pattern.compile("[a-zA-Z]+").matcher(line);
        String fullName = new String();

        while (nameMatches.find()) {
            String name = nameMatches.group();
            fullName += String.format("%s ", name);
        }

        System.out.println("Name: " + fullName);


        Matcher gradeMatches = Pattern.compile("(\\d+\\.\\d?)|-").matcher(line);

        while (gradeMatches.find()) {}
    }
}
