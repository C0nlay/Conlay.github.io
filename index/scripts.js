
const list = document.getElementById('list');
const input = document.getElementById('input');
const body = document.getElementById('body')	
i = 0;
let listOpen =  function() {
	list.style.display = "block";
		console.log("w");
};
let listClose =  function() {
	list.style.display = "none";
	console.log("n");
};

input.addEventListener('click', listOpen);
body.addEventListener('click', listClose);