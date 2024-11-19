//your JS code here. If required.
let n=document.querySelector("#level");

let count=0;
let curr=n;
while(curr){
	count++;
	curr=curr.parentElement;
}
alert(`The level of the element is: ${count}`) 