
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Message sent!");
        // Here you can add code to send the form data to your email or server.
    }
});

