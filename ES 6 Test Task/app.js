function showMarksheet() {
      const studentClass = document.getElementById('classInput').value;
      const name = document.getElementById('nameInput').value;
      const rollNo = document.getElementById('rollInput').value;

      const marks = {
        Math: 85,
        Science: 90,
        English: 88
      };

      let total = 0;
      for (let subject in marks) {
        total += marks[subject];
      }

      const percentage = (total / 300 * 100).toFixed(2);

      const marksheetDiv = document.getElementById('marksheet');
      marksheetDiv.style.display = 'block';

      marksheetDiv.innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Roll No:</strong> ${rollNo} <br>
        <strong>Class:</strong> ${studentClass} <br><br>
        <strong>Subject Marks:</strong><br>
        - Math: ${marks.Math} <br>
        - Science: ${marks.Science} <br>
        - English: ${marks.English} <br><br>
        <strong>Total:</strong> ${total} / 300 <br>
        <strong>Percentage:</strong> ${percentage}% 
      `;
    }