let enteredNumber = document.getElementById("entered-number")
let previousEntries = document.getElementById("Previous-Entries")
let count=0
//  buttons functions 

function increment(){
    count+=1
    enteredNumber.innerText = count
}
function save(){
     let savedPreviousEntries = ` ${count} -`
    previousEntries.textContent+= savedPreviousEntries
    enteredNumber.innerText=0
    count=0
}
