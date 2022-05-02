// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myFunction)
var masaiArr=JSON.parse(localStorage.getItem("schedule"))||[];

function myFunction(){
    event.preventDefault();

    arrObj={
        Match:masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value
    }
    masaiArr.push(arrObj);
    console.log(masaiArr)
    localStorage.setItem("schedule",JSON.stringify(masaiArr))
    window.location.href="matches.html"
}
