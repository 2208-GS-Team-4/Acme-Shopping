const { User } = require('../../db');
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    console.log('authentication middleware hit')
    // Get the header sent by the user = Bearer 1234254asdfawef
    const header = req.headers.authorization;

    // Separate the token from the "Bearer" word
    const token = header && header.split(" ")[1]; // "1234254asdfawef"

    // If no token was given, give them a 404
    if(!token) return res.sendStatus(404);
    //if(!token) return res.send('No token provided');

    jwt.verify(token, process.env.JWT, async (err, user) => {
        // If it was an invalid token, give them a 404
        if(err) return res.sendStatus(404);
        //if(err) return res.send('Invalid token');

        // Do stuff with our user
        const userInfo = await User.findByPk(user.id);
        if(!userInfo) return res.sendStatus(404);
        //if(!userInfo) return res.send('No user found');

        req.user = userInfo;
        next();
    })   
}

const optionalUserAuth = (req, res, next) => {
    // Get the header sent by the user = Bearer 1234254asdfawef
    const header = req.headers.authorization;

    // Separate the token from the "Bearer" word
    const token = header && header.split(" ")[1]; // "1234254asdfawef"

    // If no token was given, give them a 404
    if(!token) return next();

    jwt.verify(token, process.env.JWT, async (err, user) => {
        // If it was an invalid token, give them a 404
        if(err) return next();

        // Do stuff with our user
        const userInfo = await User.findByPk(user.id);
        if(!userInfo) return next();

        req.user = userInfo;
        next();
    })   
}

module.exports = { authenticateUser, optionalUserAuth };