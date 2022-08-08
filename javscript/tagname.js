{/* <p><button onclick="myFunction()">Change</button></p>

<div id="myDIV">
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    <p> Lorem ipsum dolor sit </p>
</div> */}

    function myFunction() {
        const element = document.getElementById("myDIV");
        element.getElementsByTagName("p")[0].style.fontSize = "24px";
    }

