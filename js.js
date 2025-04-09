// Today's tutorialll
console.log('hello world');
// Getting html element
const addCartBtns = document.querySelectorAll('.fa-plus-circle');
const totalQuantity =  document.querySelector('.total');
const cart = document.querySelectorAll('.card-body1');
// grabbing all cart quantity
const quantityEle = document.querySelectorAll('.quantity');
const subtractCartBtns = document.querySelectorAll('.fa-minus-circle');
// console.log(subtractCartBtns)
// console.log(totalQuantity)

// function to always for total cart
function updateTotalCart(){
    // console.log(cart);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        let unitPrice = parseInt(cart[i].querySelector('.unit-price').textContent);
        let quantity = Number(cart[i].querySelector('.quantity').textContent)
        total += unitPrice * quantity
       
    }
    totalQuantity.textContent = total + " $";
    // console.log(totalQuantity);
}
// updateTotalCart();
// console.log(addCartBtns);

// adding an event listener to the add button
for(let i =0; i < addCartBtns.length; i++){
    addCartBtns[i].addEventListener('click', function(){
        let quantity = Number(quantityEle[i].textContent)
        // console.log(quantityEle[i].textContent);
        // console.log(quantity);
        quantityEle[i].textContent = quantity + 1;
        // console.log(quantityEle[i].textContent)
        updateTotalCart()
    })
    
    // adding an event listener to the subtract button
}for(let i =0; i < subtractCartBtns.length; i++){
    subtractCartBtns[i].addEventListener('click', function(){
        let quantity = Number(quantityEle[i].textContent)
        if(quantity > 0){
            // console.log(quantityEle[i].textContent);
            // console.log(quantity);
            quantityEle[i].textContent = quantity - 1;
            // console.log(quantityEle[i].textContent)
            updateTotalCart()
        }else {
            alert('Cant go below 0');
        }
    })
}
