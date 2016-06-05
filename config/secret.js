module.exports = {

  database: 'mongodb://phantom:password123@ds021671.mlab.com:21671/snapup',
  port: 3000,
  secretKey: "Arash@$@!#@",

  facebook: {
      clientID: process.env.FACEBOOK_ID || '146292845774447',
      clientSecret: process.env.FACEBOOK_SECRET || '16d402371c1915bd114281f973b88639',
      profileFields: ['email', 'displayName'],
      callbackURL: "https://snapup.herokuapp.com/auth/facebook/callback"

  }
}
