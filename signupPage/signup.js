document.querySelector("#form").addEventListener("submit" , myRule)

function myRule(){
    event.preventDefault()

    var name= document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var pass = document.getElementById("Password").value

    var user = {
        Name :  name,
        Email : email,
        Password : pass,
    };

    var josn = JSON.stringify(user);
    localStorage.setItem(user, josn)
    console.log("user added")
    // alert("Sign In Successful")
    window.location.href ="SignIn.html"
}