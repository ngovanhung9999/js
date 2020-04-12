function showData(arrData) {
    //const m2 = new Manager("A456", "nguyen van b", "10/10/1992", 3.3, 500);
    const tableData = document.getElementById("tableData");
    let res = '<tr class="tile"><th>ID</th><th>Họ Tên</th><th>Ngày Sinh</th><th>Hệ Số Lương</th><th>PB/SLNV/HSCV</th><th>Lương</th></tr>';
    for (let i = 0; i < arrData.length; i++) {
        if (arrData[i] instanceof Manager) {
            res += `<tr><td>${arrData[i].getId()}</td><td>${arrData[i].getFullName()}</td><td>${arrData[i].getDateOfBirth()}</td><td>${arrData[i].getCoefficentsSalary()}</td><td>${arrData[i].getNumberOfPersonnel()}</td><td>${arrData[i].Salary()}</td></tr>`;
        } else if (arrData[i] instanceof Personnel) {
            res += `<tr><td>${arrData[i].getId()}</td><td>${arrData[i].getFullName()}</td><td>${arrData[i].getDateOfBirth()}</td><td>${arrData[i].getCoefficentsSalary()}</td><td>${arrData[i].getDepartment()}</td><td>${arrData[i].Salary()}</td></tr>`;
        } else if (arrData[i] instanceof President) {
            res += `<tr><td>${arrData[i].getId()}</td><td>${arrData[i].getFullName()}</td><td>${arrData[i].getDateOfBirth()}</td><td>${arrData[i].getCoefficentsSalary()}</td><td>${arrData[i].getPositionCoefficient()}</td><td>${arrData[i].Salary()}</td></tr>`;
        }

    }
    tableData.innerHTML = res;
}

function clearValue1() {
    const inputForm = document.forms["inputPerson"];
    inputForm["fullName"].value = "";
    inputForm["dateOfBirth"].value = "";
    inputForm["coefficentsSalary"].value = "";
    inputForm["privateAttribute"].value = "";
}