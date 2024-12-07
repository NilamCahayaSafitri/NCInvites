import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../configs/db.js';

// Select the 'users' collection from the db object:
const collection =  db.collection('users');

// Export the signup() function as shown below:
export const signup = async (req, res, next) => {
    try {
    const { username, email, password } = req.body;

    // Check for existing user
    const query = {
        $or: [{ email }, { username }],
    };
    const existingUser = await collection.findOne(query);
    if (existingUser) {
        return next({
        status: 422,
        message: 'Email or Username is already registered.',
        });
    }

    // Hash password and prepare user object
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        username,
        email,
        password: hashedPassword,
        avatar: 'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    // Insert user into database and create JWT token
    const { insertedId } = await collection.insertOne(user);
    const token = jwt.sign({ id: insertedId }, process.env.AUTH_SECRET);

    // Add the _id to the user object and remove sensitive data
    user._id = insertedId;
    const { password: pass, updatedAt, createdAt, ...rest } = user;

    // Send response with cookie
    res
        .cookie('taskly_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
    next({ status: 500, error });
    }
};