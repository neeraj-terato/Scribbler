var delPostModel= document.getElementById('delPostModel');
var mainModel=document.getElementById('myModal');
var signInModel=document.getElementById('welcomeBackModal');
var signUpModel=document.getElementById('getStartedModal');

function signInfun(){
    signInModel.style.display="block";
    mainModel.style.display="block";
    signUpModel.style.display="none";
    delPostModel.style.display="none";
  }
  
  function signUpfun(){
      signUpModel.style.display="block";
      mainModel.style.display="block";
      signInModel.style.display="none";
      delPostModel.style.display="none";
  }
    
  function closeModelfun(){
      mainModel.style.display="none";
  }

function deletePostBtnNo(){
   delPostModel.style.display="none";
   mainModel.style.display="none";

}
function trashfun(){
   delPostModel.style.display="block";
   mainModel.style.display="block";
   signInModel.style.display="none";
   signUpModel.style.display="none";
}

