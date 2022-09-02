

var homecard =  document.getElementById("homecard");
var receivecard =  document.getElementById("receivecard");
var tokens = document.getElementById("tokens")



receivecard.style = "display:none"
homecard.style = "background-color:rgb(255, 255, 255);"


// document.write(titular.getAttribute("cosita"))

// var testbtn =  document.getElementById("testbtn");
// testbtn.style = "display:none"

// //arrays
// // N dimensional arrays  
// //array functions     .push  .indexOf    sort reverse     pop

var receivebtn = document.getElementById("receivebtn");
receivebtn.addEventListener("click", function(){
    homecard.style = "display:none"
    receivecard.style = "background-color:rgb(255, 255, 255);"
})



// var receivebtn = document.getElementById("receivebtn");
// receivebtn.addEventListener("click", function(){
//     homecard.style = "display:none"
//     receivecard.style = "background-color:rgb(255, 255, 255);"

// })


var backbtn = document.getElementById("backbtn");
backbtn.addEventListener("click", function(){
    homecard.style = "background-color:rgb(255, 255, 255);"
    receivecard.style = "display:none"

})

var settings = document.getElementById("settings");
settings.addEventListener("click", function(){
    homecard.style = "background-color:rgb(255, 255, 255);"
    receivecard.style = "display:none"

})

var tokenbtn = document.getElementById("tokenbtn");
tokenbtn.addEventListener("click", function(){
    tokens.style = "background-color:rgb(255, 255, 255);"
})






