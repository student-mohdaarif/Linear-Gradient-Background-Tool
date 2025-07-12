let mybtn1 = document.getElementById("btn1");
let mybtn2 = document.getElementById("btn2");
let copycode = document.querySelector(".copycode");

let rgb1 = "#004773";
let rgb2 = "#54d542";
const hexValues = () => {
let myHexaValues = "0123456789abcdef";
    
    let colors = "#";
    for(let i = 0; i<6; i++){
        colors = colors + (myHexaValues[Math.floor(Math.random()*16)]);
    }
    return colors;
};

const handleButton1 = () => {
     rgb1 = hexValues();
    console.log(rgb1);
    mybtn1.innerText = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2})`;
    copycode.innerHTML = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () =>{
     rgb2 = hexValues();
    console.log(rgb2);
    mybtn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2})`;
    copycode.innerHTML = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

mybtn1.addEventListener("click", handleButton1);
mybtn2.addEventListener("click", handleButton2);
copycode.addEventListener("click", () =>{
navigator.clipboard.writeText(copycode.innerText);
});