const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport){
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, slse, { message: 'Não existe um utilizador com esse email.' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {

            } else {
                return done(null, false, { message: 'Password incorreta'}) 
            }
        } catch {
            
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}