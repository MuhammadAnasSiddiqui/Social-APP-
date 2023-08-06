window.addEventListener("load", function () {
    var getUsers = JSON.parse(localStorage.getItem("loginUser"));
    if (getUsers) {
        window.location.replace("./dashboard.html")
    }
    console.log(getUsers)
})

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
    if (findUser) {
        alert("successfully Login");

        localStorage.setItem("loginUser", JSON.stringify(findUser));
        window.location.replace("./dashboard.html")
    }
    else {
        alert("Email OR Password does not match")
    }


}