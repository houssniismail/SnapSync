import { Schema, model, Model } from "mongoose";

interface TypePost {
    Title: string,
    Message: string,
    Image: string,
    Comment: string[],
    Like: string[]
}

const postSchema: Schema<TypePost> = new Schema({
    Title: {
        type: String,
        required: true,
        trim: true
    },
    Message: {
        type: String,
        required: true,
        trim: true
    },
    Image: {
        type: String,
        required: true,
        trim: true
    },
    Comment: [
        {
            type: String,
            required: false,
            trim: true
        }
    ],
    Like: [
        {
            type: String,
            required: false,
            trim: true
        }
    ]
});

const PostModel: Model<TypePost> = model<TypePost>('post', postSchema);
export default PostModel;
