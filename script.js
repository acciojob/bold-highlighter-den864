const elements=document.querySelectorAll("strong");
function highlight() {
	elements.forEach(ele=>ele.style.color="green")

}

function return_normal() {
	elements.forEach(ele=>ele.style.color="black")
}