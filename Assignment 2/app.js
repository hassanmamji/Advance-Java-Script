    //   QUESTION NO 01 

    let math = 85;
    let science = 78;
    let english = 92;
    let computer = 88;
    let history = 80;

    const totalSubjects = 5;
    const maxMarksPerSubject = 100;
    const maxTotalMarks = totalSubjects * maxMarksPerSubject;

    let totalMarks = math + science + english + computer + history;
    let percentage = (totalMarks / maxTotalMarks) * 100;

    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }



        document.write(`
        <h1>Student Mark Sheet</h1>
        <p><strong>Math:</strong> ${math}</p>
        <p><strong>Science:</strong> ${science}</p>
        <p><strong>English:</strong> ${english}</p>
        <p><strong>Computer:</strong> ${computer}</p>
        <p><strong>History:</strong> ${history}</p>
        <hr>
        <p><strong>Total Marks:</strong> ${totalMarks} / ${maxTotalMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `);
