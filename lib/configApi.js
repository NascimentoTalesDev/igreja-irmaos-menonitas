module.exports  = {
    versionApi: "v1",
    api: process.env.NODE_ENV === "production" ? "https://igrejairmaosmenonitas.com/api" : "http://localhost:3000/api"
}