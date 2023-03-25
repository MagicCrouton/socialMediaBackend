
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // regex from my previous homework
        match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'not a valid Email']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "thought",
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "user",
    }]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
}
)

userSchema.virtual('friendCount')
.get(function () {
    return this.friends.length
})

const user = mongoose.model('user', userSchema)

module.exports = user