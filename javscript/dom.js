
{/* <p id="para">Text</p>
<button onclick="changeColor('blue');">Blue</button>
<button onclick="changeColor('red');">Red</button> */}
    function changeColor(newcolor) {
        const elem = document.getElementById('para');
        elem.style.color = newcolor;
    }
