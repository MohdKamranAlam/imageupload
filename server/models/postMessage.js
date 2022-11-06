import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('uploadimage', postSchema);

export default PostMessage;