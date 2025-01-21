import mongoose from "mongoose";

const petCollection = "pets";

const petSchema = new mongoose.Schema({
    first_name: {
      type: String,
    },
    age:{
        type: Number,
    }
});

export const petModel = mongoose.model(petCollection, petSchema);
