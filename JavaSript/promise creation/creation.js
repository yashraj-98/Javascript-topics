const cart = ["shoes", "shirts", "pants"];
const promise = createOrder(cart);
const OrderId = "1234";
promise.then(function () {
  proceedToPayment(OrderId);
});

//---producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order ---validate order--- orderid
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //---logic for createOrder
    const OrderId = "1234";
    if (OrderId) {
      resolve(OrderId);
    }
  });
  return pr;
}
function validateCart(cart){
    return true;
}
function proceedToPayment(OrderId){
    return true;
}