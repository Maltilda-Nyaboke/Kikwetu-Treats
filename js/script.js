$(document).ready(function(){
    $(".main").click(function(){
        $(".sub").show()
        // $(".sub").hide()
    })
});
var currentPrice = 0;

var form = document.getElementById("form");
form.addEventListener('submit',(e)=>{
e.preventDefault();
var size = document.getElementById("size").selectedOptions;
for(let i =0; i< size.length; i++){
    if(size[i].selected){
        let sizePrice = parseInt(size[i].value);
        currentPrice = currentPrice + sizePrice;
        var crust = document.getElementById("crust").selectedOptions;
        for(let k = 0; k<crust.length; k++){
            let crustPrice = parseInt(crust[k].value);
            currentPrice = currentPrice + crustPrice;
            var toppings =document.querySelectorAll(".topping");
            for(let j of toppings){
                console.log(j.value)
            }
        }
    }
}
console.log(currentPrice);

});

function Area(selection){
    this.selection =selection;
    this.setPrice = function(){
        return alert("selected");
    }
}

