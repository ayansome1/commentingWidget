let inputMainComment = document.getElementById("main-comment");
let submitMainComment = document.getElementById("submit-main-comment");
let userNameMainComment = document.getElementById("main-commenter-name");
let divCount = 1;

let addNewDiv = (parentId, data) => {
    var referenceNode = document.getElementById(parentId);
    var newNode = document.createElement('div');
    newNode.id = 'comment-' + divCount;
    divCount++;
    newNode.innerHTML = `            <div class="col-sm-12 margin-bottom-30">
                    <div class="col-sm-1">
                        <img src="images/boy.svg" class="user-photo">
                    </div>
                    <div class="col-sm-11">
                        <span class="user-name">
                        Ayan
                    </span>
                        <span class="time-ago">
                      5 sec ago
                    </span>
                        <div class="col-sm-12 padding-0">
                            daildfnioas fiosa foisa fio asiof isoa foisa fioas fio asiof saio fisaiof iosa fiosa fisa fio saiof saiof iosa fiosa fioas fiosa fio saio fioasio
                        </div>
                        <div class="col-sm-12 padding-0 details margin-top-10">
                            <span>               4                     </span>
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

}

let submitNewComment = () => {

    let comment = inputMainComment.value;
    let user = userNameMainComment.value
    console.log(comment, user);
    addNewDiv("comments-section", )
    // let commentsSectionNode = document.getElementById("comments-section");
    // objTo.appendChild(divtest);
}