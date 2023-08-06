var cardParent = document.getElementById("cardParent");

window.addEventListener("load", function () {
    var getUser = JSON.parse(localStorage.getItem("loginUser"));
    // console.log(getUser);

    if (!getUser) {
        window.location.replace("./index.html");
        return
    }


    var fullName = document.getElementById("fullName");
    fullName.innerHTML = "WELCOME" + " " + getUser.fullName;

    var getPosts = JSON.parse(localStorage.getItem("posts")) || [];
    // console.log(getPosts);   


    for (var value of getPosts) {

        // console.log(value);


        cardParent.innerHTML += `<div id="cardParent">
    <div class="card mt-3">
    
    <div class="card-body">
        <h5 class="card-title"> ${value.title} </h5>
        <p class="card-text">${value.desc}</p>
        <button class="btn btn-primary" onclick="editPost(${value.id} , this)">EDIT</button>
        <button class="btn btn-danger" onclick="deletePost(${value.id} , this)">DELETE</button>
    </div>
    </div>
    </div> `
    }






    // console.log(fullName);

})
// console.log(cardParent)


function addPost() {
    var title = document.getElementById("title")
    var desc = document.getElementById("description")


    if (!title.value || !desc.value) {
        alert("please enter values");
        return
    }
    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || [];
    // // return
    console.log("getPosts", getPosts);

    if (getPosts[0]) {
        id = getPosts[0].id + 1
        console.log("ID 2", id)
    }
    else {
        id = 1
        console.log("ID 1", id)
    }

    var cardBox = `<div id="cardParent">
    <div class="card mt-3">
    
    <div class="card-body">
        <h5 class="card-title"> ${title.value} </h5>
        <p class="card-text">${desc.value}</p>
        <button class="btn btn-primary" onclick="editPost(${id},this )">EDIT</button>
        <button class="btn btn-danger" onclick="deletePost(${id}, this)">DELETE</button>
    </div>
</div>
    </div> `
    cardParent.innerHTML = cardBox + cardParent.innerHTML;

    var postsObj = {
        id: id,
        title: title.value,
        desc: desc.value

    }
    // console.log(postsObj.id, "postObj")


    getPosts.unshift(postsObj);
    localStorage.setItem("posts", JSON.stringify(getPosts));



    title.value = ""
    desc.value = ""


}


// delete post functionality

function deletePost(id, e) {
    // console.log("DELETE", id, e);

    var getposts = JSON.parse(localStorage.getItem("posts"));

    var findIndex = getposts.findIndex(function (value) {
        // console.log(value)

        if (value.id === id) return true

    })

    // console.log(findIndex);
    getposts.splice(findIndex, 1);
    localStorage.setItem("posts", JSON.stringify(getposts));
    e.parentNode.parentNode.remove()

    // console.log(getposts)

    // var getPosts = JSON.parse(localStorage.getItem("posts"));
    // console.log(getPosts[id].id)

}


function editPost(id, e) {
    var getPosts = JSON.parse(localStorage.getItem("posts"));
    console.log(id, e);
    // return
    var indexNum;
    var post = getPosts.find(function (value, index) {
        if (value.id === id) {
            indexNum = index;
            // console.log(index)
            return true
        }
    })
    // console.log(post)
    var title = prompt("Edit Title", post.title);
    var desc = prompt("Edit desc...", post.desc);

    var editObj = {
        id: post.id,
        title: title,
        desc: desc,
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts));
    var h5 = e.parentNode.firstElementChild;
    var pDesc = e.parentNode.firstElementChild.nextElementSibling;
    h5.innerHTML = title;
    pDesc.innerHTML = desc;



    // console.log(postsObj)

}

// logOut

function logOut() {
    localStorage.removeItem("loginUser");
    window.location.replace("./index.html")
}