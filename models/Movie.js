import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Movie', MovieSchema);
