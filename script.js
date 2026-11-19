// Load comments when page opens
window.onload = function () {
    displayComments();
};

function supportMe() {
    document.getElementById("message").innerHTML =
        "Thank you for supporting John Abuto!";
}

function addComment() {

    let name = document.getElementById("username").value;
    let comment = document.getElementById("comment").value;

    if (name === "" || comment === "") {
        alert("Please enter your name and comment.");
        return;
    }

    // Get existing comments
    let comments =
        JSON.parse(localStorage.getItem("comments")) || [];

    // Add new comment
    comments.push({
        name: name,
        comment: comment
    });

    // Save back to local storage
    localStorage.setItem(
        "comments",
        JSON.stringify(comments)
    );

    // Refresh displayed comments
    displayComments();

    // Clear form
    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";
}

function displayComments() {

    let comments =
        JSON.parse(localStorage.getItem("comments")) || [];

    let commentsList =
        document.getElementById("commentsList");

    commentsList.innerHTML = "";

    comments.forEach(function(item) {

        commentsList.innerHTML += `
            <div class="comment-box">
                <h4>${item.name}</h4>
                <p>${item.comment}</p>
            </div>
        `;
    });
}
function clearComments() {

    localStorage.removeItem("comments");

    displayComments();
}