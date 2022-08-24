{/* <form name="myform" onsubmit="return validateform()">
Name <input type="text" name="name">

Password <input type="password" name="password"><br>

<input type="submit" value="register">
</form> */}


function validateform() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name == null || name == "") {
        alert("Name cant be blank");
        return false;

    } else if (password.length < 6) {
        alert('password must be at  least 6 charcters');
        return false;
    }

}
