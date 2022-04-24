const { Schema, model } = require("mongoose");

const RankSchema = new Schema(
    {
        rank: {
            type: Number,
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        poll_id: {
            type: Schema.Types.ObjectId,
            ref: "Poll"
        },
        item_id: {
            type: Schema.Types.ObjectId,
            ref: "Item"
        }
    }
);

const Rank = model("Rank", RankSchema);
module.exports = Rank;