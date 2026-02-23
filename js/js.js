const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.getElementById("year").textContent = new Date().getFullYear();

function calculateGPA() {
    const course1 = document.getElementById("course1").value;
    const course2 = document.getElementById("course2").value;
    const course3 = document.getElementById("course3").value;

    const marks = [course1, course2, course3].map(mark => Number(mark));

    if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    const avg = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

    let grade;
    if (avg >= 85) grade = "A";
    else if (avg >= 70) grade = "B";
    else if (avg >= 55) grade = "C";
    else if (avg >= 40) grade = "D";
    else grade = "F";

    document.getElementById("result").textContent = `GPA: ${avg.toFixed(2)} (${grade})`;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});