
// declaring variables
// let quantityEle = document.querySelectorAll('.quantity');
const addEleBtn = document.querySelectorAll(".fa-plus-circle");
const subtractEleBtn = document.querySelectorAll(".fa-minus-circle");
const heartBtns = document.querySelectorAll(".fa-heart");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const totalPrice = document.querySelector(".total");
const productContainer = document.querySelector('.list-products');
const quantityEle = document.querySelectorAll('.quantity');

// console.log(deleteBns)
for (let i = 0; i < heartBtns.length; i++) {
  //    console.log(heartBtns[i])
  heartBtns[i].addEventListener("click", function (event) {
    const heart = event.target;
    // console.log(heart);
    // console.log(heart.classList);
    // if (heart.classList.contains("liked")) {
    // //   console.log("it has been liked");
    //   heart.classList.remove('liked')
    // } else {
    // //   console.log("it has not been liked");
    //   heart.classList.add('liked')
    // }
    heart.classList.toggle('liked');
  });
}

// making the add buttons work.
for (let i = 0; i < addEleBtn.length; i++) {
  addEleBtn[i].addEventListener("click", function() {
    let quantity = parseInt(quantityEle[i].textContent);
    quantityEle[i].textContent = quantity + 1;
    updateTotalCart();
  });
  
  // making the subtract button work
}for (let i = 0; i < subtractEleBtn.length; i++) {
  subtractEleBtn[i].addEventListener("click", function() {
    let quantity = parseInt(quantityEle[i].textContent);
    if(quantity > 0){
      quantityEle[i].textContent = quantity - 1;
      updateTotalCart();
    }
    else{
      alert('Quantity cant be less than 0')
    }
  });
}



// deleting elements from the cart
for(i=0; i<deleteBtns.length; i++){
    deleteBtns[i].addEventListener("click", function(event){
        const deleteBtn = event.target;
        // the element i want removed
        const removedEle = deleteBtn.parentElement.parentElement.parentElement.parentElement;
        // console.log(removedEle);

        productContainer.removeChild(removedEle);
        // console.log(deleteBtn.parentElement);
        // if(deletBns){}
      updateTotalCart()
    })
}

//function to update cart price
function updateTotalCart(){
  let totalPrice = 0;
  const cartBody = document.querySelectorAll('.card-body1');
  const total = document.querySelector('.total');
  // console.log(cartBody)
  for(let i = 0; i<cartBody.length; i++){
    const unitPrice = parseInt(cartBody[i].querySelector('.unit-price').textContent);
    const quantity = parseInt(cartBody[i].querySelector('.quantity').textContent);
    totalPrice += unitPrice * quantity;
  }
    total.textContent = totalPrice + ' $';
  // console.log(total)
}
updateTotalCart();

// console.log(addEleBtn);
// console.log(quantityEle);
// set all quantity to zero
// let counter = 0;
// quantityEle.forEach((val) =>{
//     val.innerHTML = counter;
// })
// console.log(quantityEle.innerHTML);

// function updateCart(){
//    return counter++;
// }

// addEleBtn.forEach((btn) => {
//     btn.addEventListener('click', () => {

//        updateCart(btn, 'add')

//     })
// })
//function for adding
// function updateCart(btn, act){
//     const quantityEle = btn.parentElement.querySelector('.quantity');
//     let counter = Number(quantityEle.innerHTML);
//     if(act == 'add'){
//         counter++;
//         quantityEle.innerHTML = counter;
//     }
//     if(act == 'sub'){
//         if(counter > 0){
//             counter--;
//             quantityEle.innerHTML = counter;
//         }
//     }
// }
// subtractEleBtn.forEach((btn) => {
//     btn.addEventListener('click', ()=>{
//         // const quantityEle = btn.parentElement.querySelector('.quatity');
//         // let counter = Number(quantityEle);
//         // counter--;
//         // quantityEle.innerHTML = counter;

//         updateCart(btn, 'sub')
//     })
// })
// heartBtns.forEach((btn) =>{
//     btn.addEventListener('click', () => {
//         // console.log('i likee')
//         likeProduct(btn)
//     })
// })
// function likeProduct(btn){
//    let icon =  btn.parentElement.querySelector('.fa-heart');
//    icon.classList.toggle('liked')
// }
// function updatePrice (updateCart){
//     console.log(counter);

// }


