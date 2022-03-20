// $(document).ready(function(){
//     $(".main").click(function(){
//         $(".sub").show()
//         // $(".sub").hide()
//     })
// });
// var currentPrice = 0;

// var form = document.getElementById("form");
// form.addEventListener('submit',(e)=>{
// e.preventDefault();
// var size = document.getElementById("size").selectedOptions;
// for(let i =0; i< size.length; i++){
//     if(size[i].selected){
//         let price = parseInt(size[i].value);
//         currentPrice = currentPrice + price;
//         var crust = document.getElementById("crust").selectedOptions;
//         for(let k = 0; k<crust.length; k++){
//             console.log(crust);
//         }
//     }
// }
// console.log(currentPrice);

function Pizza(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.selected =function(){
       return`${this.a,this.b, this.c}`
    }
}
let size =new Pizza("small", "medium", "large");
console.log(size)