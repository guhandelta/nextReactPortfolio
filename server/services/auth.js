const exJwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:4000/';

//Middleware => Functionaltiy to check the JWT tokedn to see if the user is authenticated to view the data
// => Checks for token in authorization header, if token is present,  it will check its validity -> if valid, control goes to next middelware
//- else if token is missing or is invalid, it will throw an error
exports.checkJWT = exJwt({
    secret: jwksRsa.expressJwtSecret({ // get JWKS -> get certificate -> validate token
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://guhaprasaanth.auth0.com/.well-known/jwks.json'
      }),
    audience: 'pcZ8trYSuvn2qMqE720lSdIPaBQPSHLE',
    issuer: 'https://guhaprasaanth.auth0.com/',
    alsorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if(user && (user[namespace + 'role']) === role){
    next();
  }else{
    return res.status(401).send({title:'Not Authorized', detail: 'You are not authorized to access this page'})
  }
}
