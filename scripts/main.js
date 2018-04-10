
let inputMainComment = document.getElementById("main-comment");
let submitMainComment = document.getElementById("submit-main-comment");
let userNameMainComment = document.getElementById("main-commenter-name");



let submitNewComment = () => {

	let comment =  inputMainComment.value;
	let user = userNameMainComment.value
	console.log(comment,user);
}


