var products=document.querySelectorAll(".item");
var prices=document.querySelectorAll(".price");
var discounts=document.querySelectorAll(".discount");
var price=[1000,8000,5000];
var disc=0.7;

prices.forEach(function(pro1,index){
    pro1[index].innerText=price[index];
    localStorage.setItem("key1",pro1[index]);
})
discounts.forEach(function(disc1,index1){
    disc1[index1].innerHtml=disc*price[index1];
    localStorage.setItem("key2",disc1[index1]);
});



