const { Schema, model } = require("mongoose");

const PollSchema = new Schema(
    {
        Topic: {
            type: String,
            required: true
        }
    }
);

const Poll = model("Poll", PollSchema);
module.exports = Poll;