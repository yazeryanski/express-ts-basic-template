import {Router} from 'express';
const router = Router();

router.get('/all', (req, res) => {
  res.send('NO MORE POSTS')
})

export default router;