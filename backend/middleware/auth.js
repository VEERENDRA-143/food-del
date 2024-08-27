import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // Retrieve the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ success: false, message: "Not authorized! Login again." });
    }

    // Extract the token part
    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error" });
    }
};

export default authMiddleware;
