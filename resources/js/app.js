import axios from 'axios'
import Noty from 'noty'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
function updateCart(pizza){
    //axios will helps in post request and fetching part
    axios.post('/update-cart', pizza).then(res =>{
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Item added to card' ,
            progressBar: false,
            //by it is top right
            // layout: 'bottomleft'       
        }).show();
    }).catch(err =>{
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Something went wrong' ,
            progressBar: false,
            //by it is top right
            // layout: 'bottomleft'       
        }).show();
    })

}

addToCart.forEach((btn) =>{
    btn.addEventListener('click', (e)=>{
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})