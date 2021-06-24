import { Router } from 'express';

import { helloWorld } from '../controllers/index.controller';

const router = Router();

router.route('/').get(helloWorld);

export default router;
