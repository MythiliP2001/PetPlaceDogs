const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Hashing salt rounds
const salt = 10;
const jwtSecret = process.env.JWT_SECRET;



const SignUp = async (req, res) => {
    
    try {
        const { fullname, email, password } = req.body;

        // Check if email already exists
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.json({ status: 0, msg: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user to the database
        const newUser = new userModel({
            fullname,
            email,
            password: hashedPassword,
            images: req.file ? req.file.filename : null, // Save image filename if provided
        });

        await newUser.save();

        res.json({ status: 1, msg: "Registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 0, msg: "Server error" });
    }
};


//signin
const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: 0, msg: "Invalid email" });
        }

        // Compare the password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ status: 0, msg: "Invalid password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

        res.json({
            status: 1,
            msg: "Login successful",
            token, // Send the JWT token back to the client
            user: {
                fullname: user.fullname,
                email: user.email,
                images: user.images,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 0, msg: "Server error" });
    }
};



module.exports = { SignUp, SignIn };

