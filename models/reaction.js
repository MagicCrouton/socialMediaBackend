const { Schema, Types } = require('mongoose');
const moment = require('moment');


const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reaction_body: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: { type: Date, default: Date.now }
    },
);


module.exports = reactionSchema;