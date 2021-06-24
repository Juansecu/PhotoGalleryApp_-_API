import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://localhost/photoGalleryDb', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to database!'))
        .catch(console.error);
}
