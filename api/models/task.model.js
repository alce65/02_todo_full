import mongoose from 'mongoose';

export function taskCreator(collection = 'tasks') {
    const taskSchema = new mongoose.Schema({
        title: { type: String, required: true, unique: true },
        responsible: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        isCompleted: Boolean,
    });

    taskSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
        },
    });

    let Task;
    if (mongoose.default.models[collection]) {
        Task = mongoose.model(collection);
    } else {
        Task = mongoose.model(collection, taskSchema);
    }
    return Task;
}
