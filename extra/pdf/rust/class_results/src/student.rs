use regex::Regex;

#[derive(Debug)]
pub struct Student {
    pub name: String,
    pub tasks: String,
    pub presence: String,
    pub podcasts: String,
    pub total: String,
}

impl Student {
    const NAME_PATTERN: &str = r"(?x)(?P<name>^[^0-9.-]+)";
    // const GRADE_PATTERN: &str = r"(?P<grade>-|\d+\.\d?)";
    // const PAGENUM_PATTERN: &str = r"(?P<pagenum>[0-9]+$)";
    const LINE_PATTERN: &str = r"(?P<line>^[^0-9.-]+(\s(\d+\.\d?|-)){4})";

    pub fn from_whole_content(content: String) -> Vec<Self> {
        let lines = Self::format_lines(content);
        let students: Vec<Self> = lines.iter().map(Self::from_line).collect();

        students
    }

    pub fn from_line(line: &String) -> Self {
        let name_pattern = Regex::new(Self::NAME_PATTERN).unwrap();
        let student_name = &name_pattern.captures(&line).expect("name not found")["name"];

        let grades_line = line.replace(student_name, "").trim().to_owned();
        let grades: Vec<String> = grades_line
            .replace(",", ".")
            .split(" ")
            .map(|g| g.to_string())
            .collect();

        Self {
            name: student_name.trim().to_owned(),
            tasks: grades[0].to_owned(),
            presence: grades[1].to_owned(),
            podcasts: grades[2].to_owned(),
            total: grades[3].to_owned(),
        }
    }

    fn format_lines(content: String) -> Vec<String> {
        let mut lines: Vec<Vec<String>> = vec![];

        let line_pattern = Regex::new(Self::LINE_PATTERN).unwrap();
        for (_, fields) in line_pattern
            .captures_iter(&content)
            .map(|c| c.extract::<5>())
        {
            let fields = fields
                .iter()
                .map(|f| f.trim().to_string())
                .collect::<Vec<String>>();
            lines.push(fields);
        }

        lines.iter().map(|v| v.join(" ")).collect()
    }
}

