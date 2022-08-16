<!-- <div id="div1" style="padding: 30px; background-color:pink;" onmouseover="this.innerText +='123'; ">12
</div>
<p><button onclick="myFunction( event)"> event</button></p> -->

<script>
    function myFunction(event) {
        const ev = document.createEvent("MouseEvent");
        ev.initMouseEvent("mouseover", true);
        document.getElementById("div1").dispatchEvent(ev);
    }

</script>