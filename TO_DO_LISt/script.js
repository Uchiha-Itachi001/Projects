let input = document.querySelector(".input")
let list = document.querySelector(".do-list")

function addTask(){
    if(input.value ===""){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value="";
    dataInfo();
};

list.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        dataInfo();
        }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        dataInfo();
    }
})
function dataInfo(){
    localStorage.setItem("data",list.innerHTML)
}
(function showtask(){
    list.innerHTML = localStorage.getItem("data");
})();