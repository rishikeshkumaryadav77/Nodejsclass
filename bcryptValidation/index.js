const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json()); // Middleware to parse JSON data

// 🔹 Simulating a database
const users = [];

app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Store user (In real applications, store it in a database)
        users.push({ username, password: hashedPassword });

        res.status(201).send("User Registered Successfully");
    } catch (err) {
        res.status(500).send("Error Registering User");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Find user in database
        const user = users.find(user => user.username === username);
        if (!user) return res.status(404).send("User not found");

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid Password");

        res.send("Login Successful");
    } catch (err) {
        res.status(500).send("Error Logging In");
    }
});

// Start Server
app.listen(4000, () => console.log("Server running on port 4000"));