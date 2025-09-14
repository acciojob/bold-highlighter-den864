const elements=document.querySelectorAll("strong");
function highlight() {
	elements.forEach(ele=>ele.style.color="green")

}
function return_normal() {
	elements.forEach(ele=>ele.style.color="black")
}

const target=document.querySelector("p");
target.addEventListener("mouseover",highlight);
target.addEventListener("mouseout",return_normal);
