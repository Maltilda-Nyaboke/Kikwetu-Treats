add_order_qnty.addEventListener("click",addOrderQuantity);

function addOrderQuantity(e){
    e.preventDefault();
    quantityVar = quantityVar + 1;
    quantity_ordered.innerHTML = quantityVar;

    //set price according to quantity
    let number_of_items_ordered = parseInt(quantity_ordered);
    let item_price = parseInt(total_price_content);
    total_price.innerHTML = currentPrice * number_of_items_ordered;
}

remove_order_qnty.addEventListener("click", removeOrderQnty)
function removeOrderQnty(e){
    e.preventDefault();
    if(quantityVar<2){
        alert("Can not order 0 items")
        return;
    }
    quantityVar = quantityVar - 1;
    quantity_ordered.innerHTML = quantityVar;

    //set price according to quantity
    let number_of_items_ordered = parseInt(quantity_ordered);
    let item_price = parseInt(total_price_content);
    total_price.innerHTML =  currentPrice * number_of_items_ordered;
}

add_order.addEventListener("click", (e)=>{
    $(".reset").show();
    $(".order-summary").hide();
});

document.ready(function(){
    $("button.checkoutBtn").click(function(){
        alert("enter location")
    })
})
