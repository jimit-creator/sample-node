import { Router } from "express";
const router = Router();

router.get('/home', (req, res) => {
    res.send('Home API is live');
});

export const loadRoutes = router; 
