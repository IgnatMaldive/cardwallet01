

var homecard =  document.getElementById("homecard");
var receivecard =  document.getElementById("receivecard");



receivecard.style = "display:none"
// homecard.style = "display:none"


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

