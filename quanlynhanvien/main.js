(function() {
    const dataPerson = [];
    const m1 = new Manager("A123", "nguyen van a", "10/10/1991", 3.2, 100);
    const m2 = new Manager("A456", "nguyen van b", "10/10/1992", 3.3, 500);
    const m3 = new Personnel("B123", "nguyen van c", "10/10/1993", 1.2, "Kế Toán");
    const m4 = new President("B456", "nguyen van e", "10/10/1994", 3.5, 2);
    dataPerson.push(m1);
    dataPerson.push(m2);
    dataPerson.push(m3);
    dataPerson.push(m4);
    //thay doi giao dien form
    const listBtn = document.querySelectorAll(".btnP");
    const inputId = document.getElementById("inputId");
    const privateAttributeName = document.getElementById("privateAttributeName");
    listBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains("btnNV")) {
                inputId.value = "NV";
                privateAttributeName.innerHTML = "Phòng Ban:";
            } else if (button.classList.contains("btnQL")) {
                inputId.value = "QL";
                privateAttributeName.innerHTML = "Số Lượng NV:";
            } else if (button.classList.contains("btnGD")) {
                inputId.value = "GD";
                privateAttributeName.innerHTML = "Hệ Số Vị Trí:"
            }
        });
    });

    (function() {
        inputId.value = "NV";
        privateAttributeName.innerHTML = "Phòng Ban:";
    })();
    showData(dataPerson);
    //lay du lieu va them vao data
    const inputForm = document.forms["inputPerson"];
    const buttonGui = document.getElementById("buttonGui");
    buttonGui.addEventListener('click', function() {
        let id = inputForm["id"].value;
        let fullName = inputForm["fullName"].value;
        let dateOfBirth = inputForm["dateOfBirth"].value;
        let coefficentsSalary = inputForm["coefficentsSalary"].value;
        let privateAttribute = inputForm["privateAttribute"].value;
        // Kiểm tra điều kiện ngu , chứ bên html input cho thuat tinh required va tyle=number la xong
        // thoi kệ luyện câu điều kiện
        if (fullName == "" || fullName == null) {
            alert("bạn chưa nhập họ và tên");
        } else if (dateOfBirth == "" || dateOfBirth == null) {
            alert("Bạn chưa nhập ngày tháng năm sinh");
        } else if (coefficentsSalary == "" || coefficentsSalary == null) {
            alert("Bạn chưa nhập hệ số lương");
        } else if (privateAttribute == "" || privateAttribute == null) {
            alert("Bạn chưa nhập ô cuối");
        } else {
            let neo1 = false;
            let neo2 = false;
            const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            let hex = "";
            for (let i = 0; i < 8; i++) {
                hex += hexValues[Math.floor(Math.random() * hexValues.length)];
            }
            if (Number.isNaN(Number.parseFloat(coefficentsSalary))) {
                alert("Hệ số phải là số");
            } else {

                coefficentsSalary = Number.parseFloat(coefficentsSalary);
                neo1 = true;
            }
            if (id == "NV") {
                neo2 = true;
            }
            if (id == "QL") {
                if (Number.isNaN(Number.parseInt(privateAttribute))) {
                    alert("Số lượng nhân viên phải là số");
                } else {
                    privateAttribute = Number.parseInt(privateAttribute);
                    neo2 = true;
                }
            } else if (id == "GD") {
                if (Number.isNaN(Number.parseFloat(privateAttribute))) {
                    alert("Hệ số vị trí phải là số");
                } else {
                    privateAttribute = Number.parseFloat(privateAttribute);
                    neo2 = true;
                }
            }
            if (neo1 && neo2) {
                if (id == "NV") {
                    let nv = new Personnel(id + hex, fullName, dateOfBirth, coefficentsSalary, privateAttribute);
                    dataPerson.push(nv);
                    clearValue1();
                } else if (id == "QL") {
                    let ql = new Manager(id + hex, fullName, dateOfBirth, coefficentsSalary, privateAttribute);
                    dataPerson.push(ql);
                    clearValue1();
                } else if (id == "GD") {
                    let gd = new President(id + hex, fullName, dateOfBirth, coefficentsSalary, privateAttribute);
                    dataPerson.push(gd);
                    clearValue1();
                }
                showData(dataPerson);
            }
        }
    });
    //phan selet
    //tim nhan vien co luong cao nhat
    const btnHighestSalary = document.getElementById("btnHighestSalary");
    btnHighestSalary.addEventListener('click', function() {
        const newArr = [];
        let obj = dataPerson[0];
        for (let i = 1; i < dataPerson.length; i++) {
            if (dataPerson[i].Salary() > obj.Salary()) {
                obj = dataPerson[i];
            }
        }
        newArr.push(obj);
        showData(newArr);
    });
    //tim nhan vien thuoc phong ban
    const btnTheDepartment = document.getElementById("btnTheDepartment");
    btnTheDepartment.addEventListener('click', function() {
        const inputTheDepartment = document.getElementById("inputTheDepartment").value;
        const newArr = dataPerson.filter(function(obj) {
            if (obj instanceof Personnel) {
                if (obj.getDepartment() == inputTheDepartment) {
                    return true;
                }
            }
        });
        showData(newArr);
    });
})()