const mongoose = require('mongoose');
const { Schema } = mongoose;
const reaction = require('./reaction');


const thoughtSchema = new Schema(
{
    thought_body: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
      },
      createdAt: { type: Date, default: Date.now },
    username: {
        type: String,
        required: true,
    },
    reactions: [reaction]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
}
);


thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
  });



const thought = mongoose.model('thought', thoughtSchema);


module.exports = thought;