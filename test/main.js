
const startButton = document.querySelector('.start_button')

const root = document.querySelector(":root")
const rootStyle = getComputedStyle(root);

startButton.addEventListener('click',clickEvent)
function clickEvent () {
  if(startButton.outerText=='START'){
    document.querySelector('.start_button').innerText = 'STOP'
    root.style.setProperty('--spinningTime',`textRotation 10s linear infinite`)
    root.style.setProperty('--spinningTimeReverse',`textReverseRotation 10s linear infinite`)
    document.querySelector('.speed').oninput = function (e) {
      root.style.setProperty('--spinningTime',`textRotation ${this.value}s linear infinite`)
  
    }
  }else{
    document.querySelector('.start_button').innerText = 'START' 
    root.style.setProperty('--spinningTime',`textRotation 0s linear infinite`)
    root.style.setProperty('--spinningTimeReverse',`textReverseRotation 0s linear infinite`)
    document.querySelector('.speed').oninput = function (e) {
      root.style.setProperty('--spinningTime',`textRotation 0s linear infinite`)
  
    }
  }
}
  



  const textElement = document.querySelectorAll(".text");
textElement.forEach(element => {
  const textElementParent = element.parentNode.offsetWidth;
    const textLength = element.innerText.split("").length
const transformedText = element.innerText.split("").map((char, i) => {
    const rotationDegree = i* textLength/1.5;
    return `<span style="transform:rotate(${rotationDegree}deg);transform-origin:0px ${textElementParent/2}px ">${char}</span>`;
  }).join("")
  element.innerHTML = transformedText;
        });