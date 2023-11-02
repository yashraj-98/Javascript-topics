const cart = ["shoes", "sandals", "shirt"];
createOrder(cart,function (OrderId){
    proceedToPayment(OrderId);
});

const promise = createOrder(cart);
promise.then(function (OrderId){
    proceedToPayment(OrderId);
});