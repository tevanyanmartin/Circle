  const textElement = document.querySelectorAll(".text");
textElement.forEach(element => {
  const textElementParent = element.parentNode.offsetWidth;
    const textLength = element.innerText.split("").length
const transformedText = element.innerText.split("").map((char, i) => {
    const rotationDegree = i* 7.3;
    return `<span style="transform:rotate(${rotationDegree}deg);transform-origin:0px ${textElementParent/2}px ">${char}</span>`;
  }).join("")
  element.innerHTML = transformedText;
        });