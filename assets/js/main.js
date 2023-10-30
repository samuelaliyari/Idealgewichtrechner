

const heightInput = document.body.querySelector("#bodyHeight");
const ageInput = document.body.querySelector("#age");
const typeBreit = document.body.querySelector("#breit");
const typeSchmal = document.body.querySelector("#schmal");
const resultOutput = document.body.querySelector("p");
const submitButton = document.body.querySelector("div input");

submitButton.addEventListener("click", () => {
    const height = Number(heightInput.value);
    const age = Number(ageInput.value);
    const breit = typeBreit.checked;
    const schmal = typeSchmal.checked;
    

    if (schmal) {
        
        resultOutput.textContent = `Dein Idealgewicht ist ${parseFloat(((height - 100) + (age/ 10)) * 0.9 * 0.9).toFixed(1)} kg.`;
    }
    if (breit) {
        resultOutput.textContent = `Dein Idealgewicht ist ${parseFloat(((height - 100) + (age/ 10)) * 0.9 * 1.1).toFixed(1)} kg.`;

    }
})


