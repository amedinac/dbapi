const jwt = require('jsonwebtoken');
const getProperties = require('./handlePropertiesEngine');
const propertiesKey = getProperties();
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSing = async (user) => {

    const sign = jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )

    return sign;
}

const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null;
    }

}

module.exports = { tokenSing, verifyToken }