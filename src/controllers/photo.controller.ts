import { unlink } from 'fs-extra';
import { resolve } from 'path';

import { NextFunction, Request, Response } from 'express';

import { IPhoto } from '../interfaces/Photo';

import Photo from '../models/Photo.model';

export async function createPhoto(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response<IPhoto>> {
    const { title, description } = req.body;
    const newPhoto: IPhoto = {
        title,
        description,
        imagePath: req.file?.path
    };
    const photo = new Photo(newPhoto);

    await photo.save();

    return res.json({
        message: `Photo ${req.file?.filename} saved successfully!`,
        photo
    });
}

export async function deletePhoto(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> {
    const deletedPhoto = await Photo.findByIdAndRemove(req.params.photoId);

    if (deletedPhoto) await unlink(resolve(deletedPhoto.imagePath!));

    return res.json({
        message: `Photo ${deletedPhoto?.title} was removed successfully!`,
        deletedPhoto
    });
}

export async function getPhotos(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response<IPhoto>> {
    const photos = await Photo.find();
    return res.json(photos);
}

export async function getPhoto(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> {
    const photo = await Photo.findById(req.params.photoId);
    return res.json(photo);
}

export async function updatePhoto(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> {
    const { title, description } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(
        req.params.photoId,
        {
            title,
            description
        },
        { new: true }
    );

    return res.json({
        message: `Photo ${updatedPhoto?.id} successfully updated!`,
        updatedPhoto
    });
}
