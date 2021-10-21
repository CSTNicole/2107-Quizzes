import { MongoClient } from "mongodb";
import mongoose from 'mongoose'

import SignIn from './models/SignIn.js'

//the URL is stored in the .env file
const uri = process.env.DATABASE_URL;

export async function getSignIns() {
    const client = mongoose.connect(uri);

    const signins = await SignIn.find()
    return signins;

};

// this function creates a signin data
export async function createSignIn(username, password) 
{
    //connect to the client
    const client = mongoose.connect(uri);

    const signin = await new SignIn(
        {
            username,
            password
        }
    )
    
    return signin.save()
};