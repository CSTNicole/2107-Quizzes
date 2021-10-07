//const { MongoClient } = require('mongodb');
import {MongoClient} from 'mongodb'

const uri = "mongodb+srv://nicole:cstnicole@cluster0.teqwa.mongodb.net/sample_mflix?retryWrites=true&w=majority";

//const uri = 'mongodb+srv://flamingo:Xp92tRG2rgmSHTkC@cluster0.ketvc.mongodb.net/sample_mflix?retryWrites=true&w=majority?retryWrites=true&w=majority';


export function getAnimals(){
    const client = new MongoClient(uri);
    return new Promise(
        (resolve, reject) => 
        {
            client.connect(async err => 
            {
                    if (err) 
                    {
                        reject (err)
                        return;
                    }    
                    // //making a new collection in the database
                    const collection = client.db().collection("animals");
                    function insertAnimal() 
                    {
                        return new Promise 
                        (
                            (resolve, reject) => 
                            {
                                collection.insertOne(
                                    {
                                        "type": "snake",
                                        "breed": "python",
                                        "habitat": "jungle"
                                    },
                                    () => {
                                        resolve('success');
                                        console.log("successfully saved")
                                    }
                                )
                            }
                        );
                    }
                    await insertAnimal();

                    const cursor = collection.find()
                    const data =await cursor.toArray()
                    console.log(data)


                // perform actions on the collection object
                client.close();
                resolve(data)
            })
        }
        
    )
}

export function createAnimals(type, breed, habitat) {
    const client = new MongoClient(uri);

    return new Promise(
        (resolve, reject) => {
            client.connect(async err => {
                if (err) {
                    reject(err)
                    return
                }
                const collection = client.db().collection('animals')
                function insertOneAnimal() {
                    return new Promise(
                        (resolve, reject) => {
                            collection.insertOne(
                                {
                                    type, breed, habitat
                                },
                                () => {
                                    resolve('success');
                                    console.log('saved successfully')
                                }
                            )
                        }
                    )
                }
                await insertOneAnimal()
                client.close()
                resolve('done')
            })
        }
    )
}