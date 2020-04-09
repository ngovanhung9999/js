(function() {
    const img = document.getElementById("image");
    const btn = document.querySelectorAll(".btn");
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
    ];
    let count = 0;
    btn.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.classList.contains("btn-left")) {
                count--;
                if (count < 0) {
                    count = pictures.length - 1;
                }
                img.src = `img/${pictures[count]}.jpeg`;

            }
            if (button.classList.contains("btn-right")) {
                count++;
                if (count >= pictures.length) {
                    count = 0;
                }
                img.src = `img/${pictures[count]}.jpeg`;

            }
        });
    });
    const changeImage = () => {
        if (count >= pictures.length) {
            count = 0;
        }
        img.src = `img/${pictures[count]}.jpeg`;
        count++;
    }
    changeImage();
    setInterval(changeImage, 3000);
})();