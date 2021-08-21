// getting elements from button
const buttons = document.getElementsByTagName('button');
let flag = false;

//function for updating the total price 
function updateTotal() {
    const bestPrice = 1299;
    const costFormemory = parseInt(document.getElementById('memory-cost').textContent);
    const costForStorage = parseInt(document.getElementById('storage-cost').textContent);
    const costForDelivery = parseInt(document.getElementById('delivery-cost').textContent);
    return bestPrice + costFormemory + costForStorage + costForDelivery;
}

//creating loop for checking condition of different specifications
for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', function () {
        if (buttons[j].id === '8gb-memory') {
            newCustomization("memory-cost", 0);
        } else if (buttons[j].id === '16gb-memory') {
            newCustomization("memory-cost", 180);
        } else if (buttons[j].id === '256gb-storage') {
            newCustomization("storage-cost", 0);
        } else if (buttons[j].id === '512gb-storage') {
            newCustomization("storage-cost", 100);
        } else if (buttons[j].id === '1tb-storage') {
            newCustomization("storage-cost", 180);
        } else if (buttons[j].id === 'late-delivery') {
            newCustomization("delivery-cost", 0);
        } else if (buttons[j].id === 'early-delivery') {
            newCustomization("delivery-cost", 20);
        } else {
            PromoCode();
        }
    })
}

// function for using promo code for discount
function PromoCode() {
    const inputField = document.getElementById('input-field');
    const Apply = inputField.value;

    inputField.value = '';

    if (Apply === '') return;
    else if (Apply === "stevekaku") {
        flag = true;
        const totalPrice = document.getElementById('total-price');
        const discountedPrice = document.getElementById('user-payment');
        const priceWithoutPromoCode = parseInt(totalPrice.textContent);
        discountedPrice.textContent = priceWithoutPromoCode - (priceWithoutPromoCode * 0.2);
    } else {
        flag = false;
    }
}

//function for  customization of pc
function newCustomization(id, cost) {
    const now = document.getElementById(id);
    now.textContent = cost;
    const totalCost = updateTotal();
    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = totalCost;

    if (flag) {
        const discountedPrice = document.getElementById('user-payment');
        const priceWithoutPromoCode = parseInt(totalPrice.textContent);
        discountedPrice.textContent = priceWithoutPromoCode - (priceWithoutPromoCode * 0.2);
    } else {
        const discountedPrice = document.getElementById('user-payment');
        const priceWithoutPromoCode = parseInt(totalPrice.textContent);
        discountedPrice.textContent = priceWithoutPromoCode;
    }
}