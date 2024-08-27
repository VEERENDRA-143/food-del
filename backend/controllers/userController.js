import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import dotenv from "dotenv";

dotenv.config();  // Ensure the .env file is read

// login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Password Incorrect" });
        }
        
        const token = createToken(user._id);
        res.json({ success: true, token: token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Login Failed" });
    }
};

const createToken = (id) => {
    const secret = process.env.JWT_SECRET || 'default_secret';  // Default value as fallback
    return jwt.sign({ id }, secret);
};

// register user
export const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Checking if the user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Already Exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a valid password length must be greater than 8" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error", error: error });
    }
};
