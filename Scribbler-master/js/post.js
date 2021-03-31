
var signInModel=document.getElementById('welcomeBackModal');
var signUpModel=document.getElementById('getStartedModal');
var mainModel=document.getElementById('myModal');

var editButton=document.getElementById("edit");
var saveButton=document.getElementById("save");

var titleBlog=document.getElementById("postHeading");
var titleBlog_edit=document.getElementById("postHeading_edit");

var bodyContent=document.getElementById("postBody");
var bodyContent_edit=document.getElementById("postBody_edit");

var like=document.getElementById("like");
var likeCounter=document.getElementById("likeCounter");

var commentData=document.getElementById("commentData");
var allComments=document.getElementById("allComments");

function signInfun(){
    signInModel.style.display="block";
    mainModel.style.display="block";
    signUpModel.style.display="none";
  }
  
  function signUpfun(){
      signUpModel.style.display="block";
      mainModel.style.display="block";
      signInModel.style.display="none";
  }
    
  function closeModelfun(){
      mainModel.style.display="none";
  }
  
  function edit_post() {
    titleBlog.style.display="none";
    titleBlog_edit.style.display="block";

    bodyContent.style.display="none";
    bodyContent_edit.style.display="block";

    editButton.style.display="none";
    saveButton.style.display="block";

    var val_title=titleBlog.textContent.trim();
    titleBlog_edit.innerHTML=val_title;

    var val=bodyContent.textContent.trim();
    bodyContent_edit.innerHTML=val;


    bodyContent_edit.style.height = "1px";
    bodyContent_edit.style.height = (25+bodyContent_edit.scrollHeight)+"px";

}

function save_post() {
    titleBlog.style.display="block";
    titleBlog_edit.style.display="none";

    bodyContent.style.display="block";
    bodyContent_edit.style.display="none";

    editButton.style.display="block";
    saveButton.style.display="none";

    titleBlog.innerHTML=titleBlog_edit.value;
    bodyContent.innerHTML=bodyContent_edit.value;
}

var count=0;

function like_post() {

    like.innerHTML="<i class='fa fa-thumbs-up' aria-hidden='true'></i> Liked!";
    count++;
    if(count==1){
        likeCounter.innerHTML="1 person has liked it";
    }
    else{
        likeCounter.innerHTML=count+" people have liked it";
    }

}

function post_comment(){
    if(commentData.value == ""){
        alert("Please write some comment");
        return;
    }
    var p= document.createElement('p');
    p.innerHTML=commentData.value;
    p.setAttribute('class','commentContent');
    allComments.insertBefore(p, allComments.firstChild);
    
}
