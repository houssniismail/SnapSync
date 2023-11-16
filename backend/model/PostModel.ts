import { Schema, model, Model } from "mongoose";

interface typePost {
    Creator: string,
    Title: string,
    Message: string,
    Tags: string,
    Image: string
}

const postSchema: Schema<typePost> = new Schema({
    Creator: {
        type: String,
        require: true,
        trim: true
    },
    Title: {
        type: String,
        require: true,
        trim: true
    },
    Message: {
        type: String,
        require: true,
        trim: true
    },
    Tags: {
        type: String,
        require: true,
        trim: true
    },
    Image: {
        type: String,
        require: true,
        trim: true
    }
});

const PostModel: Model<typePost> = model('post', postSchema)
export default PostModel;