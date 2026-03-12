const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
// Show welcome message
alert("Welcome to Abig's website!");

// Greeting button
const button = document.getElementById("greetBtn");

button.addEventListener("click", function () {
    alert("Hello! Thanks for visiting my website!");
});

// Get elements
const form = document.getElementById("contactForm");
const messagesList = document.getElementById("messagesList");


// Function to add a message
function addMessage(messageText) {

    const li = document.createElement("li");

    const messageSpan = document.createElement("span");
    messageSpan.textContent = messageText;

    // 👍 LIKE BUTTON
    const likeBtn = document.createElement("button");
    likeBtn.textContent = "👍 Like";

    let likeCount = 0;

    likeBtn.addEventListener("click", function () {
        likeCount++;
        likeBtn.textContent = `👍 Like (${likeCount})`;
    });

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add everything to the message
    li.appendChild(messageSpan);
    li.appendChild(likeBtn);
    li.appendChild(deleteBtn);

    messagesList.appendChild(li);
}


// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const fullMessage = `${name}: ${message}`;

    addMessage(fullMessage);

    form.reset();
});