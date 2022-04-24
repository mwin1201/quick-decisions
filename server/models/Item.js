const { Schema, model } = require("mongoose");

const ItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        poll_id: {
            type: Schema.Types.ObjectId,
            ref: "Poll"
        }
    }
);

const Item = model("Item", ItemSchema);
module.exports = Item;