(function() {
    let button = document.getElementById("btn");
    let span = document.getElementById("hexColor");
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    //button.addEventListener("click", changeColor);

    function changeColor() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += hexValues[Math.floor(Math.random() * hexValues.length)];
        }
        span.innerHTML = hex;
        document.body.style.backgroundColor = hex;
    }
    changeColor();
    setInterval(changeColor, 1000);
})()