{/* <p id="abc"> </p> */}


{/* <button onclick="document.getElementById('abc').innerHTML=Date()">Time</button> */}



{/* <button onclick="this.innerHTML=Date()">This Date</button>
<p id="demo"></p>
<button onclick="displayDate()">Date</button> */}

    function displayDate() {
        document.getElementById("demo").innerHTML = Date();

    }
//     <div class="name">
//     <p>lorem ipsum</p>
// </div>
// <div class="name">
//     <p>lorem ipsum</p>
// </div>
// <div class="name">
//     <p>lorem ipsum</p>
// </div>

    const para = document.getElementsByClassName("name");
    para[1].style.backgroundColor ="red";
   
