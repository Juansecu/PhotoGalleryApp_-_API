import { extname } from 'path';

import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, callback) => {
        callback(null, uuidv4() + extname(file.originalname));
    }
});

export default multer({ storage });
