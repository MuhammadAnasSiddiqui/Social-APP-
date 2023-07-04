// For Login Page 

function login() {
    var userEmail = document.getElementById("email").value
    var userPassword = document.getElementById("password").value

    // console.log(userEmail,
    //     userPassword)

    var getUserData = JSON.parse(localStorage.getItem("userData"));
    // console.log(getUserData);
    

    var findUser = getUserData.find(function (value) {
        if (value.email === userEmail && value.password === userPassword) return true




    })
    console.log(findUser)
    // return
    if (findUser !== undefined) {
        alert("successfully Login");

        localStorage.setItem("loginUser", JSON.stringify(findUser));
        window.location.href = "./dashboard.html"
    }
    else{
        alert("Email OR Password does not match")
    }


}