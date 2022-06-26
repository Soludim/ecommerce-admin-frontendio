var inputCount = document.getElementById("countInput")
var removeCart = document.getElementById("removeCart")
var productImgs = ["image-product-1", "image-product-2", "image-product-3", "image-product-4"]
var productImg = document.getElementsByClassName("product-show");
var swipePrev = document.getElementById("swipe-prev");
var swipeNext = document.getElementById("swipe-next");
var swipePrevModal = document.getElementById("swipe-prev-modal");
var swipeNextModal = document.getElementById("swipe-next-modal");
var swipePosition = 0;
var productDOMs = document.getElementsByClassName("product")
var cartEmptyDiv = document.getElementsByClassName("cart-content-empty");
var cartNotificaton = document.getElementsByClassName("cart-notification")[0]

var cart = 0; //items placed in cart

function increaseCount() {
    inputCount.value = parseInt(inputCount.value) + 1 // increase count
}

function decreaseCount() {
    if (inputCount.value <= 0) return //count cant be less that 
    inputCount.value = parseInt(inputCount.value) - 1 // increase count
}

function swipePrevFunc() {
    let prevSwipePos = swipePosition;
    if (swipePosition > 0) {
        --swipePosition; //decrease swipePosition by 1
        productImg[0].src = "images/" + productImgs[swipePosition] + '.jpg';
        productImg[1].src = "images/" + productImgs[swipePosition] + '.jpg';
        addSelectedClassToActiveProductImage(prevSwipePos)
    }
}
function swipeNextFunc() {
    let prevSwipePos = swipePosition;
    if (swipePosition < productImgs.length-1) {
        ++swipePosition; //increase swipePosition by 1
        productImg[0].src = "images/" + productImgs[swipePosition] + '.jpg';
        productImg[1].src = "images/" + productImgs[swipePosition] + '.jpg';
        addSelectedClassToActiveProductImage(prevSwipePos)
    }
}

function selectedProImg(imageName) {
    let prevSwipePos = swipePosition;
    const index = productImgs.indexOf(imageName);
    swipePosition = index; //update swipe position to selected image index
    productImg[0].src = "images/" + imageName + '.jpg';
    productImg[1].src = "images/" + imageName + '.jpg';
    addSelectedClassToActiveProductImage(prevSwipePos)
}

function addSelectedClassToActiveProductImage(previousPos) {
    productDOMs[previousPos].classList.remove("selected_prod")
    productDOMs[previousPos+4].classList.remove("selected_prod")
    productDOMs[swipePosition].classList.add("selected_prod")
    productDOMs[swipePosition+4].classList.add("selected_prod")

}

function addToCart() {
    if (parseInt(inputCount.value) <= 0) return; // count must be greater than 1

    cartEmptyDiv[0].style.display = "none"; // set empty message display to none

    cart = inputCount.value
    cartNotificaton.innerHTML = `${cart}`
    cartNotificaton.style.visibility = "visible";
    document.getElementById("cartFilled").style.display = 'flex';
    document.getElementById("priceTotal").innerHTML = `$125.00 x ${inputCount.value} <span style="font-weight:700; color:#000">$${125*parseInt(inputCount.value)}</span>` // price and count display div
}

function delItemInCart() {
    //delete button
    cartEmptyDiv[0].style.display = "flex"; // display empty message
    document.getElementById("cartFilled").style.display = 'none'; // let cart filled disappear
    cart = 0;
    cartNotificaton.style.visibility = "hidden"
}

function toggleCartDisplay() {
    let cartCard = document.getElementsByClassName("cart-card")[0]
    if (cartCard.style.display == "none")
       cartCard.style.display = "block"
    else
       cartCard.style.display = "none"
}

swipePrev.addEventListener("click", swipePrevFunc)
swipeNext.addEventListener("click", swipeNextFunc)
swipePrevModal.addEventListener("click", swipePrevFunc)
swipeNextModal.addEventListener("click", swipeNextFunc)
