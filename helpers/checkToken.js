import jwt from "jsonwebtoken"

export function checkToken(token){
    console.log("Meu Token", JSON.parse(token));
    let novo = JSON.parse(token)
    let decoded = jwt.verify(novo, process.env.JWT_SECRET)
    console.log(decoded);
}