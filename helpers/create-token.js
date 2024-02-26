import jwt from 'jsonwebtoken'

const createToken = async (user, req, res) => {

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.status(200).json({
        token: token,
        message: { type: "success", data: "Usuário autenticado!" }
    })

}
module.exports = createToken