
// document.write("<br>");

// var ownerKey = localStorage.getItem('ownerKey');
// var purseKey = localStorage.getItem('purseKey');
// var seed = localStorage.getItem('seed');
// var rate = localStorage.getItem('rate');
// var usdBalance = localStorage.getItem('usdBalance');
var purseSats = localStorage.getItem('purseSats');
// var hasBackedUp = localStorage.getItem('hasBackedUp');
// var contracts = localStorage.getItem('contracts');
// var sending = localStorage.getItem('sending');
// const minfo = localStorage.getItem('minfo');


//   purseAddr 


// document.write(ownerKey)
// document.write("<br>")
// document.write(purseKey)
// document.write("<br>")
// document.write(seed)
// document.write("<br>")
// document.write(rate)
// document.write("<br>")
// document.write(usdBalance)
// document.write("<br>")
// document.write(purseSats)
// document.write("<br>")
// document.write(hasBackedUp)
// document.write("<br>")
// document.write(contracts)
// document.write("<br>")
// document.write(sending)
// document.write("<br>")
// document.write(minfo)



var satoshiBalance =  document.getElementById("satoshiBalance");
var saldosatoshi = Math.round(purseSats*100000000);



const formatter = Intl.NumberFormat('en', )

var saldosatoshiformat = formatter.format(saldosatoshi)

satoshiBalance.innerHTML=saldosatoshiformat





// var depositAddress =  document.getElementById("depositAddress");
// depositAddress.innerHTML=minfo


// var bookNow =  document.getElementById("bookNow");

// bookNow.style= "display:none"

// var receivecard = document. getElementById("receivecard");
// receivecard.parentNode.removeChild(receivecard);

// var sendcard = document. getElementById("sendcard");
// sendcard.parentNode.removeChild(sendcard);

//removeElement("sendcard")
// removeElement("receivecard")
// removeElement("homecard")



// bookNow button functionality
// var bookNow=document.getElementById("bookNow");
// bookNow.addEventListener("click", function(){
//     removeElement("homecard")
// })

// // receive button functionality
// var receive=document.getElementById("receive");
// receive.addEventListener("click", function(){
//     removeElement("homecard")
// })


// //remove element function
// function removeElement(elementId) {
//     // Removes an element from the document.
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }


// // send button functionality
// var send=document.getElementById("send");
// send.addEventListener("click", function(){


// })


