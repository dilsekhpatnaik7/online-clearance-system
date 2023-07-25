const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mess: {
        type: String,
        required: true
    },
    acad_hostel: {
        type: String,
        required: true
    },
    library: {
        type: String,
        required: true
    },
    extra: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    }
    // tokens: [
    //     {
    //         token: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ]
})

// JWT Token
// userSchema.methods.generateAuthToken = async function() {
//     const secretKey = 'abcdefghijklmnopqrstuvwxyz0123456789'
//     try {
//         let tokenGenetartion = jwt.sign({_id: this._id}, secretKey)
//         this.tokens = this.tokens.concat({token: tokenGenetartion})
//         await this.save();
//         return token;
//     } catch (error) {
//         console.log(error);
//     }
// }

const User = mongoose.model('userinfo', userSchema, 'userinfo');
module.exports = User;