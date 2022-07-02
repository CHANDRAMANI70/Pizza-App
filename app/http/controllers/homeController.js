const Menu = require('../../models/menu')
function homeController(){
    //factory function just returns an object
    return {
        //crud controller - create read update and delete
        async index(req, res) {
            //to get all the datat from database
            // Menu.find().then(function(pizzas){
            //     console.log(pizzas)
            //     res.render('home', {pizzas: pizzas})
            // })

            //better way
            const pizzas = await Menu.find()
            return res.render('home', {pizzas: pizzas})
        }
    }
}

module.exports = homeController