const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
  ];
  
const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
  ];
  
function generateStudentMarkSheets(students, Details) {
    const studentsMarkSheets = [];
  
    students.forEach((student) => {
      const details = Details.find((detail) => detail.Roll === student.Roll);
      const markSheet = {
        name: student.name,
        Roll: student.Roll,
        math: details.subjects.math || 0,
        english: details.subjects.english || 0,
        chemistry: details.subjects.chemistry || 0,
        computer: details.subjects.computer || 0,
        total:
          (details.subjects.math || 0) +
          (details.subjects.english || 0) +
          (details.subjects.chemistry || 0) +
          (details.subjects.computer || 0),
        status: details.subjects.math >= 35 && details.subjects.english >= 35 && details.subjects.chemistry >= 35 && details.subjects.computer >= 35 ? "pass" : "fail"
      };
  
      studentsMarkSheets.push(markSheet);
    });
  
    return studentsMarkSheets;
  }
  
  const studentsMarkSheets = generateStudentMarkSheets(students, Details);
  console.log(studentsMarkSheets);
  