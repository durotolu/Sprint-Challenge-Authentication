const jwt = require('jsonwebtoken');

function genetateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department, 
    }
    const options = {
        expiresIn: '2h',
    }

    const result = jwt.sign(
        payload,
        process.env.NODE_ENV === 'development' ? 'super secret' : process.env.SECRET,
        options,
    )

    return result;
}

module.exports = genetateToken;