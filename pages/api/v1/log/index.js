import { mongooseConnect } from "@/lib/mongoose";
import { Log } from "@/models/Log";

export default async function LogIndex(req, res, next){
    await mongooseConnect();
    const { method } = req; 
        
    if (method === "POST") {
        
        const { message } = req.body;

        try {
            await Log.create({
                message
            })
            
        } catch (error) {
            console.log(error);
        }
    }
}