<html lang="en">
    <head>
    <title>Webpage</title>
    <!-- အခြားသော head အကြောင်းအရာများ -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>sign in</h2>
        <form>
            <input type="text" placeholder="Username" id="username">
            <input type="password" placeholder="Password" id="password">
            <div class="options">
                <label>
                    <input type="checkbox"> Remember me
                </label>
                <a href="#">Forgot Password</a>
            </div>
            <button type="button" onclick="login()">LOGIN</button>
        </form>
        <p>Don't have an account? <a href="#">Register here</a></p>
    </div>
    <script src="bottom.js"></script>
</body>
</html>
