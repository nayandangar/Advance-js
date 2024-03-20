let school = [
    {
      name: "Nayan Dangar",
      markSheet: [
        { subject: "hindi", marks: 58 },
        { subject: "english", marks: 85 },
        { subject: "maths", marks: 42 },
      ],
    },
    {
      name: "Latesh Patil",
      markSheet: [
        { subject: "hindi", marks: 76},
        { subject: "english", marks: 91 },
        { subject: "maths", marks: 38 },
      ],
    },
    {
      name: "Urvish Patel",
      markSheet: [
        { subject: "hindi", marks: 79 },
        { subject: "english", marks: 75 },
        { subject: "maths", marks: 44 },
      ],
    },
    {
      name: "Dharmik Patel",
      markSheet: [
        { subject: "hindi", marks: 77 },
        { subject: "english", marks: 65 },
        { subject: "maths", marks: 66 },
      ],
    },
  ];

  // Task-1
  // function getAverage() {
  //   let Average = school.map((e) => {
  //       total = 0
  //        e.markSheet.forEach(e => {
  //          total += e.marks
  //        });
  //        e.persentage = total
  //        return e
  //   })
  //   Average.sort((a,b) => 
  //     b.persentage - a.persentage
  //   );
  //   return  Average.slice(0,1)[0].name;
  // }
  
  function getAverage() {
    let topStudent = school.reduce((prev, curr) => {
      let totalMarks = curr.markSheet.reduce((acc, curr) => acc + curr.marks, 0);
      curr.persentage = totalMarks; // Assuming percentage is calculated based on total marks
      return prev.persentage > curr.persentage ? prev : curr;
    });
    
    return topStudent.name;
  }
  console.log("-----Topper Student---->", getAverage())

  
  // Task - 2 
  // if i write any subject name than give me the topper of that sub.
  // function findTopper(subject) {
  //     let maxMarks = 0;
  //     let topper = 0;
  //     for (let student of school) {
  //         for (let mark of student.markSheet) {
  //             if (mark.subject === subject && mark.marks > maxMarks ) {
  //                 maxMarks = mark.marks;
  //                 topper = student.name;
  //             }
  //         }
  //     }
  //     return { name: topper, marks: maxMarks };
  // }
  // let subject = "maths";
  // let { name: topperStudent, marks: maxMarks } = findTopper(subject);
  // if (topperStudent) {
  //     console.log(`The topper student in ${subject} is ${topperStudent} and marks = ${maxMarks}`);
  // } else {
  //     console.log(`No student found for ${subject}.`);
  


