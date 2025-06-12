import mongoose, { mongo, Schema } from "mongoose";

export interface Contact extends Document {
    name: string;
    email: string;
}

const contactSchema = new Schema<Contact>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
        validate: {
            validator: function (v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
});

export const ContactModel = mongoose.model<Contact>('Contact', contactSchema);
