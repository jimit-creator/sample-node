import { Router } from "express";
import { ContactModel } from "./models/contact.model";
const router = Router();

router.get('/home', async (req, res) => {
    const contact = new ContactModel({
        name: 'John Doe',
        email: 'jimithothi@gmail.com'
    });
    await contact.save();
    res.status(200).json(contact);
});

export const loadRoutes = router; 
