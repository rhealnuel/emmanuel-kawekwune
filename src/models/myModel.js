import mongoose from 'mongoose';

const mySchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please eneter name"]
        },
        siteLink:{
            type: String,
            required: true,
        },
        gitLink:{
            type: String,
            required: true,

        },
        tools:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.models.myModel || mongoose.model('myModel', mySchema);
// const myModel = mongoose.model('myModel', mySchema);

// module.exports = myModel;