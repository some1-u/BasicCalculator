/*Variables down*/
const result = document.getElementById("Calc-Result");
let problem = "";
const numbers=document.querySelectorAll(".Number");
const clear=document.querySelector("#Clear");
const operations=document.querySelectorAll(".Operations")
/*Click functions */
numbers.forEach(x => x.addEventListener("click",function(){
    result.innerText += x.innerText;
    problem += x.innerText;
} ))
clear.addEventListener("click",function() {
    result.innerText  = "";
    problem = "";
    alert(problem);
})
