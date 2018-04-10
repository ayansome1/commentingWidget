let divCount = 1;

let addNewDiv = (id, parentId, user, time, comment, like, addedNow) => {
	var referenceNode = document.getElementById(parentId);
	var newNode = document.createElement('div');
	newNode.id = 'comment-' + divCount;
	divCount++;
	if(addedNow){
		time = "Just now"
	}
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
                            <span id="like-count-for-${id}">${like}</span>
                            <img src="images/up-arrow.svg" class="vote margin-right-10 cursor-pointer" onClick="like(${id},true)">
                            <img src="images/down-arrow.svg" class="vote margin-right-20 cursor-pointer" onClick="like(${id},false)">
                            <span class="margin-right-20 cursor-pointer" onClick="reply(${id})">
                          Reply
                        </span>
                            <span class="margin-right-20 cursor-pointer">
                          Share
                        </span>
                        </div>
                        <div id="replies-for-${id}"> </div>
                    </div>
                </div>`;

	referenceNode.after(newNode);
};

let addNewReply = (parentId, user, time, comment) => {
	var referenceNode = document.getElementById(parentId);
	var newNode = document.createElement('div');
	// newNode.id = 'comment-' + divCount;
	divCount++;
	newNode.innerHTML = `            
			<div class="col-sm-12 margin-bottom-30 margin-top-10 padding-left-0">
                    <div class="col-sm-1">
                        <img src="images/boy.svg" class="user-photo">
                    </div>
                    <div class="col-sm-11">
                        <span class="user-name">
                        ${user}
                   		 </span>
                       
                        <div class="col-sm-12 padding-0">
                            ${comment}
                        </div>
                        
                    </div>
             </div>`;

	referenceNode.before(newNode);
};

let submitNewComment = () => {
	let comment = document.getElementById('main-comment').value;

	let user = window.localStorage.getItem('userName');

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
	window.localStorage.setItem('data', JSON.stringify(dataArray));

	console.log(comment, user);
	addNewDiv(dataArray.length + 1, 'comments-section', user, time, comment, 0, true);
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
	for (let i = 0; i < dataArray.length; i++) {
		let obj = dataArray[i];
		console.log(obj);
		obj = JSON.parse(obj);
		console.log(obj.user);
		// console.log(obj.time);
		console.log(Date.parse(obj.time));

		console.log(timeSince(Date.parse(obj.time)));

		addNewDiv(
			i + 1,
			'comments-section',
			obj.user,
			timeSince(Date.parse(obj.time)),
			obj.comment,
			obj.like
		);
	}
};

let like = (id, isLike) => {
	let data = window.localStorage.getItem('data');
	let likeItem = document.getElementById('like-count-for-' + id);

	console.log(id);

	if (isLike) {
		likeItem.innerHTML = parseInt(likeItem.innerHTML) + 1;
	} else {
		likeItem.innerHTML =
			parseInt(likeItem.innerHTML) > 0 ? parseInt(likeItem.innerHTML) - 1 : 0;
	}

	let dataArray = [];
	if (data) {
		dataArray = JSON.parse(data);
	}
	for (let i = 0; i < dataArray.length; i++) {
		if (i + 1 === id) {
			let obj = dataArray[i];
			obj = JSON.parse(obj);
			console.log(obj.user);
			if (isLike) {
				obj.like++;
			} else {
				if (obj.like !== 0) {
					obj.like--;
				}
			}
			dataArray[i] = JSON.stringify(obj);
			window.localStorage.setItem('data', JSON.stringify(dataArray));

			break;
		}
	}
};

let reply = id => {
	console.log(id);
	let referenceNode = document.getElementById('replies-for-' + id);
	var newNode = document.createElement('div');
	newNode.id = 'reply-input-details';
	newNode.innerHTML = `            
			<div class="col-sm-12 margin-top-10 margin-bottom-10 padding-left-0">
                <div class="col-sm-8 margin-bottom-10 padding-left-0">
                    <input id="reply-input" type="text" class="form-control" placeholder="Enter your reply...">
                </div>
                <div class="col-sm-4 margin-bottom-10">
                    <button id="submit-reply" type="button" class="btn btn-info" onClick="submitReply(${id})">Submit</button>
                </div>
            </div>`;

	referenceNode.after(newNode);
};

let submitReply = id => {
	let commentDetails = document.getElementById('reply-input').value;

	let user = window.localStorage.getItem('userName');
	let time = new Date();

	addNewReply('replies-for-' + id, user, time, commentDetails);
	var div = document.getElementById('reply-input-details');
	if (div) {
		div.parentNode.removeChild(div);
	}
};

getComments();
