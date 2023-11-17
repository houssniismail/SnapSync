import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    tags: { type: String, required: true },
    image: { type: String },
    like: { type: Number, default: 0 }
});

const Post = model('Post', postSchema);

export default Post;
