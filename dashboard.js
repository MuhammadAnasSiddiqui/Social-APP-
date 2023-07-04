window.addEventListener("load", function () {
    let getUser = JSON.parse(localStorage.getItem("loginUser"));
    // console.log(getUser);

    let fullName = document.getElementById("fullName");
    fullName.innerHTML = "WELCOME" + " " + getUser.fullName
    // console.log(fullName);

})
let cardParent = document.getElementById("cardParent");
console.log(cardParent)

function addPost() {
    let title = document.getElementById("title")
    let desc = document.getElementById("description")


    if (!title.value || !desc.value){
        alert("please enter values");
        return 
    }
    
    let cardBox = `<div id="cardParent">
    <div class="card mt-5">
    
    <div class="card-body">
        <h5 class="card-title"> ${title.value} </h5>
        <p class="card-text">${desc.value}</p>
        <a href="#" class="btn btn-primary">EDIT</a>
        <a href="#" class="btn btn-danger">DELETE</a>
    </div>
</div>
    </div> `
    cardParent.innerHTML = cardBox + cardParent.innerHTML;

    title.value = ""
    desc.value = ""


}




