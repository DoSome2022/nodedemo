import mongoose from 'mongoose';

const {Schema} = mongoose;

const InputSchema = new Schema ({
    Input1 : {
        type: String
    },
    Input2 : {
        type: String
    },
    Input3 : {}

})

const Input = mongoose.models.input || mongoose.model("input",InputSchema)

export default Input