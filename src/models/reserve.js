import { Schema, model } from 'moongose'

const ReserveSchema = new Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    house: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default model('Reserve', ReserveSchema)