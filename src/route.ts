import { Router } from "express";
import { ContactModel } from "./models/contact.model";
const router = Router();

router.get('/home', async (req, res) => {
    try {
        const contact = new ContactModel({
            name: 'John Doe',
            email: 'jimithothi@gmail.com'
        });
        await contact.save();
        res.status(200).json({
            success: true,
            data: contact
        });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create contact',
            message: error instanceof Error ? error.message : 'Unknown error occurred'
        });
    }
});

export const loadRoutes = router; 
