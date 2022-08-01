const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');




buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    });
});

equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
})

clear.addEventListener('click', () => {
    result.textContent = "";
})

function chg() {
    console.log(result.value)
}
console.log(result);
result.size = 10;
result.maxLength=3;