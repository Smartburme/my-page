function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert("Login successful!");
    }
}
