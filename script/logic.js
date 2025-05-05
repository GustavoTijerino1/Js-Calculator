
const counter = document.querySelector(".counter")
const buttons = document.querySelectorAll("button");
let nums = []
buttons.forEach(function (button) {

    button.addEventListener('click', function () {
        let btnValue = button.textContent.trim()
        if (btnValue !== "C" && btnValue !== "Bck") {

            nums.push(btnValue);
            counter.innerHTML = nums.join("")
        }

    });

});





