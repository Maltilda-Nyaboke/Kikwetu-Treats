function Pizza(size,crust,topping,quantity){
    this.size = size;
    this.crust = crust;
    this.topping = topping;

}
var currentPrice = 0;
let quantityVar = 1;
let add_order_qnty = document.querySelector(".add_order_qty");
let remove_order_qnty = document.querySelector(".remove_order_qnty");
let quantity_ordered = document.querySelector(".qnty");
let total_price = document.querySelector(".total-price");
let total_price_content = document.querySelector(".total-price").innerHTML;
var form = document.getElementById("form");
let add_order = document.querySelector(".add-order");
form.addEventListener('submit',placeOrder);

//function for placing order
function placeOrder (e){
    e.preventDefault();
    Pizza.prototype.getSizeValue= function(){};
    var size = document.getElementById("size").selectedOptions;
    for(let i =0; i< size.length; i++){
        if(size[i].selected){
            let sizePrice = parseInt(size[i].value);
            //Updating current price 
            currentPrice = currentPrice + sizePrice;
                //setting size description
                let sizeTextArray = size[i].text.split(' ');
                let size_desc_para = document.querySelector(".size-desc");
                let size_desc = document.querySelector(".size-desc").innerHTML;
                size_desc = `${size_desc} ${sizeTextArray[0]}`;
                size_desc_para.innerHTML = size_desc;
                Pizza.prototype.getCrustValue = function(){};
            var crust = document.getElementById("crust").selectedOptions;
            for(let k = 0; k<crust.length; k++){
                //updating current price
                let crustPrice = parseInt(crust[k].value);
                currentPrice = currentPrice + crustPrice;
    
    
                //Setting crust description
                let crustTextArray = crust[k].text.split(" ");
                let crust_desc_para = document.querySelector(".crust-desc");
                let crust_desc =document.querySelector(".crust-desc").innerHTML;
                crust_desc = `${crust_desc} ${crustTextArray[0]}`;
                crust_desc_para.innerHTML = crust_desc;
    
                //toppings
                Pizza.prototype.getToppingValue = function(){}
                var toppings =document.querySelectorAll(".topping");
                for(let j of toppings){
                    if(j.checked){
                        //Updating current price
                        let toppingPrice = parseInt(j.value);
                        currentPrice = currentPrice + toppingPrice;
                        total_price.innerHTML = currentPrice;
                        //Setting topping description
                        let topping_desc_para =document.querySelector(".topping-desc");
                        let topping_desc =document.querySelector(".topping-desc").innerHTML;
                        let selectedTopping = ` ${topping_desc} ${j.nextElementSibling.innerHTML},`;
                        topping_desc_para.innerHTML =selectedTopping;
                        console.log(topping_desc);

                        quantity_ordered.innerHTML = quantityVar;
                        console.log(quantityVar);
                        
                    }
                    
                }
            }
        }
    }
    $(".reset").hide();
    console.log(currentPrice);
    
    }

console.log(currentPrice)    
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