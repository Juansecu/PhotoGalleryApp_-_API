import { Schema, model } from 'mongoose';

import { IPhoto } from '../interfaces/Photo';

const PhotoSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

export default model<IPhoto>('Photo', PhotoSchema);
