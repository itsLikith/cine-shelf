import mongoose from "mongoose";

const streamInfo = new mongoose.Schema({
    recentlyWatched: {
        type: [Object]
    },
    recommended: {
        type: [Object]
    }
});

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: [true,"Username is required"]
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        minlength: [8, "Password should be of minimum 8 characters"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain 8 characters, atleast one lowercase letter, atleast one uppercase letter, atleast one number, atleast one special character"]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/"^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/,"Email must be valid"]
    },
    userInfo: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        phoneNumber: {
            type: Number,
            unique: true
        },
        userPfp: {
            type: String,
            default: ""
        }
    },
    streamInfo: {
        recentlyWatched: {
            type: streamInfo
        }
    }
});

const users = mongoose.model('users', userSchema);
export default users;