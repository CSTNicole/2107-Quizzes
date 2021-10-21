import mongoose from 'mongoose';

const signinSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    }
)



//use the 
export default mongoose.models.signin || mongoose.model('signin', signinSchema)