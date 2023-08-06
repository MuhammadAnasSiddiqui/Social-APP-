window.addEventListener("load", function () {
    var getUsers = JSON.parse(localStorage.getItem("loginUser"));
    if (getUsers) {
        window.location.replace("./dashboard.html")
    }
    console.log(getUsers)
})


function signUp() {

    var fullName = document.getElementById("fullName").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    // console.log(fullName, phoneNumber, email, password);


    var userObj = {
        fullName,
        phoneNumber,
        email,
        password,
    }

    var getData = JSON.parse(localStorage.getItem("userData"));
    // console.log(getData);

    if (getData === null) {

        console.log("first user")


        var array = [];
        array.push(userObj);
        localStorage.setItem("userData", JSON.stringify(array));



        alert("You are successfully signup");
        window.location.href = "index.html"



    }
    else {
        console.log("other users");

        var findUser = getData.find(function (value) {
            // console.log(value.email, "value");

            if (value.email === email) {
                // console.log("correct email");
                return true
            }
        })


        if (findUser === undefined) {
            // console.log("undefined");

            getData.push(userObj);
            localStorage.setItem("userData", JSON.stringify(getData));

            alert("You are successfully signup");
            window.location.href = "index.html"



        }
        else {
            alert("Your email address already exist")
        }

    }



}



