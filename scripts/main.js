// let inputMainComment = document.getElementById('main-comment');
let submitMainComment = document.getElementById('submit-main-comment');
let userNameMainComment = document.getElementById('main-commenter-name');
let divCount = 1;
// let userName;

let addNewDiv = (parentId, user, time, comment, like) => {
	var referenceNode = document.getElementById(parentId);
	var newNode = document.createElement('div');
	newNode.id = 'comment-' + divCount;
	divCount++;
	newNode.innerHTML = `            
			<div class="col-sm-12 margin-bottom-30">
                    <div class="col-sm-1">
                        <img src="images/boy.svg" class="user-photo">
                    </div>
                    <div class="col-sm-11">
                        <span class="user-name">
                        ${user}
                    </span>
                        <span class="time-ago">
                      ${time}
                    </span>
                        <div class="col-sm-12 padding-0">
                            ${comment}
                        </div>
                        <div class="col-sm-12 padding-0 details margin-top-10">
                            <span>               ${like}                     </span>
                            <img src="images/up-arrow.svg" class="vote margin-right-10">
                            <img src="images/down-arrow.svg" class="vote margin-right-20">
                            <span class="margin-right-20">
                          Reply
                        </span>
                            <span class="margin-right-20">
                          Share
                        </span>
                        </div>
                    </div>
                </div>`;

	referenceNode.after(newNode);
};

let submitNewComment = () => {
	let comment = document.getElementById('main-comment').value;

	let user = window.localStorage.getItem('userName');

	// window.localStorage.setItem('userName', userName);

	// let commentsSectionNode = document.getElementById("comments-section");
	// objTo.appendChild(divtest);
	let data = window.localStorage.getItem('data');

	let dataArray = [];

	console.log(data);
	if (!data) {
		dataArray = [];
	} else {
		dataArray = JSON.parse(data);
	}
	let time = new Date();
	let obj = { id: dataArray.length + 1, user: user, comment: comment, time: time, like: 0 };
	dataArray.push(JSON.stringify(obj));
	console.log(dataArray);
	window.localStorage.setItem('data', JSON.stringify(dataArray) );

	console.log(comment, user);
	addNewDiv('comments-section', user, time, comment, 0);
	// let user = window.localStorage.setItem('data': data);
};

let setUserName = () => {
	userName = document.getElementById('user-name').value;
	window.localStorage.setItem('userName', userName);
};

let getComments = () => {
	let data = window.localStorage.getItem('data');
	let dataArray = [];
	if (data) {
		dataArray = JSON.parse(data);
	}
	for (let i=0 ; i<dataArray.length;i++) {
		let obj = dataArray[i];
		obj = JSON.parse(obj);
		console.log(obj.user);
		addNewDiv('comments-section', obj.user, obj.time, obj.comment, 0);
	}
};

getComments();
