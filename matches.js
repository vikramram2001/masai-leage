// write js code here corresponding to matches.html

var masaiArr=JSON.parse(localStorage.getItem("schedule"))||[];
console.log(masaiArr);

displayData(masaiArr);



var favouritesArr=JSON.parse(localStorage.getItem("favourites"))||[]

function displayData(masaiArr){
  
    document.querySelector("tbody").innerHTML="";

  

    masaiArr.forEach(function(elem){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.Match;

        var td2=document.createElement("td");
        td2.innerText=elem.TeamA;

        var td3=document.createElement("td");
        td3.innerText=elem.TeamB;

        var td4=document.createElement("td");
        td4.innerText=elem.Date;

        var td5=document.createElement("td");
        td5.innerText=elem.Venue;

        var td6=document.createElement("td");
        td6.innerText="Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";

        td6.addEventListener("click",function(){

            addfav(elem);
        })
       tr.append(td1,td2,td3,td4,td5,td6);
       document.querySelector("tbody").append(tr);
        
    });

}

function addfav(elem){
    favouritesArr.push(elem); 

    localStorage.setItem("favourites",JSON.stringify(favouritesArr));
    window.location.href="favourites.html"
}

function handlefilter(){
    var selected=document.querySelector("#filterVenue").value
    console.log(selected);
    var filterlist=favouritesArr.filter(function(elem){
        return elem.Venue===selected
    })
    displayData(filterlist)
}
