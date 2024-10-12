import { Router } from 'express';
const router = Router();

router.get('/all', (req, res) => {
   res.json({ data:  "respuesta" }); 
});


export default router;