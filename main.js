var displayCurrent = "";

var displayDiv = document.querySelector(".display")

var buttons1 = document.querySelectorAll(".number, .operator:not(.equal)")

var equalDiv = document.querySelector(".equal")

console.log(buttons1)
console.log(displayDiv)

for (i = 0; i < buttons1.length; i++) {
    
    let currentButton = buttons1[i]
    buttons1[i].addEventListener('click', () => {
        displayDiv.textContent = `${displayDiv.textContent}${currentButton.textContent}`
    })   
}

equalDiv.addEventListener('click', () => {
    console.log(displayDiv.textContent)
    var splitted = displayDiv.textContent.split('+');
    console.log(splitted)
    var result = 0;
for(i=0; i < splitted.length; i++) {
    var number = parseInt(splitted[i])
    result = result + number
}
    displayDiv.textContent = result
})