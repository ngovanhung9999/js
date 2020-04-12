(function() {
    const customerImage = document.getElementById("img");
    const customerName = document.getElementById("tileName");
    const customerText = document.getElementById("para");
    const listBtn = document.querySelectorAll(".btn");
    const arrData = [];
    let index = 0;

    function Customer(img, name, text) {
        this._img = img;
        this._name = name;
        this._text = text;
    }

    function createCustomer(img, name, text) {
        let fullImg = `img/customer-${img}.jpg`;
        let c = new Customer(fullImg, name, text);
        arrData.push(c);
    }
    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?');
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock');
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.');
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.');
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
    listBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains("btnRight")) {
                index++;
                if (index >= arrData.length) {
                    index = 0;
                }
                customerImage.src = arrData[index]._img;
                customerName.innerHTML = arrData[index]._name;
                customerText.innerText = arrData[index]._text;
            } else if (button.classList.contains("btnLeft")) {

                index--;
                if (index < 0) {
                    index = arrData.length - 1;
                }
                customerImage.src = arrData[index]._img;
                customerName.innerHTML = arrData[index]._name;
                customerText.innerText = arrData[index]._text;
            }
        });
    });
    (function() {
        customerImage.src = arrData[0]._img;
        customerName.innerHTML = arrData[0]._name;
        customerText.innerText = arrData[0]._text;
    })();
})();