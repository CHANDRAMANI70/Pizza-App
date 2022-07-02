function authController(){
    //factory function just returns an object
    return {
        //crud controller - create read update and delete
        login(req, res) {
            res.render('auth/login')
        },
        register(req, res){
            res.render('auth/register')
        }
    }
}

module.exports = authController