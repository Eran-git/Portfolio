import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {                                   // 1st object literal
        image: {
            type: String,               // image is a type String
            required: true,             // image required
        },
    },
    {                                   // 2nd object literal
        timestamps: true,               // mongoose automatic create createAt and updateAt mongoose handle of time and date 
    }
);

export default mongoose.models.Profile ||
mongoose.model("Profile", ProfileSchema);