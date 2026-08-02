package com.mycompany.app;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Student {
    public String name;
    public String tasks;
    public String presence;
    public String podcasts;
    public String total;

    public Student(String n, String tk, String pr, String pd, String tt) {
        name = n;
        tasks = tk;
        presence = pr;
        podcasts = pd;
        total = tt;
    }

    public String toString() {
        return String.format("Student {\n\t%s,\n\t%s,\n\t%s,\n\t%s,\n\t%s\n}\n");
    }

    // TODO: throw an error if the line doesn't match the desired pattern 
    public static Student fromLine(String line) {
        String studentName = matchName(line);
        // line.replaceFirst(studentName, "");
        // List<String> grades = gradePattern.matcher(line).results().map(g -> g.toString()).collect(Collectors.toList());
        String[] grades = matchGrades(line);

        return new Student(
            studentName,
            grades[0],
            grades[1],
            grades[2],
            grades[3]
        );
    }

    private static String matchName(String line) {
        Matcher nameMatches = Pattern.compile("[a-zA-Z]+").matcher(line);
        String fullName = new String();

        while (nameMatches.find()) {
            String word = nameMatches.group();
            fullName += String.format("%s ", word);
        }

        return fullName;
    }

    private static String[] matchGrades(String line) {
        Matcher gradeMatches = Pattern.compile("(\\d+\\.\\d?)|-").matcher(line);
        String[] foundGrades = new String[4];

        int i = 0;
        while (gradeMatches.find()) {
            foundGrades[i] = gradeMatches.group();
            i++;
        }

        return foundGrades;
    }
}
