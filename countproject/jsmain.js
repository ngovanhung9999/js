(function() {
    const buttons = document.querySelectorAll(".counterBtn");
    let count = 0;
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.classList.contains("prevbtn")) {
                count--;
            } else if (button.classList.contains("nextbtn")) {
                count++;
            }
            let number = document.getElementById("number");
            number.innerHTML = count;
            if (count < 0) {
                number.style.color = "red";
            } else if (count > 0) {
                number.style.color = "green";
            } else {
                number.style.color = "#333333";
            }
        })
    })
})()