import { Router } from 'express';

import multerLib from '../libs/multer.lib';

import {
    createPhoto,
    deletePhoto,
    getPhoto,
    getPhotos,
    updatePhoto
} from '../controllers/photo.controller';

const router = Router();

router.route('/').get(getPhotos).post(multerLib.single('photo'), createPhoto);

router.route('/:photoId').delete(deletePhoto).get(getPhoto).put(updatePhoto);

export default router;
