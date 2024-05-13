import express from 'express';
import { user } from '../models/user';

const router = express.Router();

//User signup endpoint
router.post('/signup', (req: Request, res: Response) => {
    const { email, password } = req.body;
    // Checking if user already exists
    const existingUser = user.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({error: 'user already exists' })
    }
    // Creating new user
    const newUser = { email, password, currencies: [] };
    users.push(newUser);
    return res.status(201).json({ message: 'user created successfully'})
});

//User signin endpoint
router.post('/signin', (req: Request, res: Response) => {
    const { email, password } = req.body;
    // Check if user exists and password matches
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({error: 'Invalid email or password'});
    }
    return res.status(200).json({ message; 'Login successful', user});
})

export { router as userRoutes };