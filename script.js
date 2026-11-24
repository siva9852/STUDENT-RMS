
function addResult() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    if (name === "" || roll === "" ||
        document.getElementById("m1").value === "" ||
        document.getElementById("m2").value === "" ||
        document.getElementById("m3").value === "") {
        alert("Please fill all details");
        return;
    }

    if ([m1, m2, m3].some(mark => mark < 0 || mark > 100)) {
        alert("Marks must be between 0 and 100");
        return;
    }

    let total = m1 + m2 + m3;
    let percentage = total / 3;

    let result = (m1 >= 35 && m2 >= 35 && m3 >= 35)
        ? "Pass" : "Fail";

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${total}</td>
        <td>${percentage.toFixed(2)}%</td>
        <td>${result}</td>
    `;

    document.getElementById("resultList").appendChild(row);

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
}
