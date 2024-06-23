var plusbtns=Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtns=Array.from(document.querySelectorAll(".fa-minus-circle"));
var delbtns=Array.from(document.querySelectorAll(".fa-trash-alt"));
var heartbtns=Array.from(document.querySelectorAll(".fa-heart"));
var cards=Array.from(document.querySelectorAll(".card"));

for ( let plusbtn of plusbtns){
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML++;
        total()
    })
}
for ( let minusbtn of minusbtns){
        minusbtn.addEventListener("click",function(){
            minusbtn.previousElementSibling.innerHTML>0?
            minusbtn.previousElementSibling.innerHTML--:
            null,total()
    })
}
for (let i in delbtns){
    delbtns[i].addEventListener("click",function(){
       cards[i].remove()
       total()
    })
}
for(let heartbtn of heartbtns){
    heartbtn.addEventListener("click",function(){
    if (heartbtn.style.color == "black"){
        heartbtn.style.color= "red"
    }
    else
    heartbtn.style.color="black"
})
}
function total() {
    let s=0;
    var qte=Array.from(document.querySelectorAll(".qute"));
    var prc=Array.from(document.querySelectorAll(".unitt-price"));
    var tot=document.getElementById("total-price");
    for (let i=0;i<prc.length;i++){
        s=s+prc[i].innerHTML*qte[i].innerHTML;
    }
    tot.innerHTML=s

}
