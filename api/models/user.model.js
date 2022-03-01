import mongoose from 'mongoose';

export function userCreator(collection = 'users') {
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        passwd: { type: String, required: true },
        tasks: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Task',
            },
        ],
    });

    userSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
            delete returnedObject.passwd;
        },
    });

    let User;
    if (mongoose.default.models[collection]) {
        User = mongoose.model(collection);
    } else {
        User = mongoose.model(collection, userSchema);
    }
    return User;
}
