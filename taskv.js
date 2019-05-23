
/*repository click*/
var st ="tab-repository-btn";

function tabclick(id) {
document.getElementById(st).style.borderBottom= "0px";
document.getElementById(id).style.borderBottom= "1px solid";
document.getElementById(id).style.borderBottomColor= "red";
st=id;

}


/*profile info*/
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var obj = JSON.parse(this.responseText);
      document.getElementById("name-div").innerHTML = obj.name;
	   document.getElementById("uid-div").innerHTML=obj.login;
	   document.getElementById("info-div").innerHTML=obj.bio;
	   document.getElementById("profile-pic-img").src = "img/supreet.jpeg";
    }
  };
  xhttp.open("GET", "https://api.github.com/users/supreetsingh247", true);
  xhttp.send();

  
  
  
 
  
/*result for filtering language*/
data("all","all","");
function data (lang,typ,nm){
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	var obj = JSON.parse(this.responseText);
	var a="";
	var count =0; 
      //debugger
	   for (i = 0; i < obj.length; i++) { 
	   
	   if( (obj[i].language == lang || lang == "all") && (("Forks" == typ && obj[i].fork )||("Archived" == typ &&  obj[i].archived ) || typ == "all" ) &&(obj[i].name == nm || nm == "")) 
	  { 	count +=1;
		if(obj[i].name!=null)
		 {
		a=a+'<div id="up-div-repository-result-div">'+obj[i].name+'</div>'
		}
		if(obj[i].description!=null)
		{
		a=a+'<div id="middle-content-result-div">'+obj[i].description+'</div>'
		}
		if(obj[i].language!=null)
		{
		a=a+'<div id="down-div-repository-result-div"><span id="javascript-front-sysmbol-span"></span><div id="javascript-div">'+obj[i].language+'</div></div>';
		}
		a=a+'<hr>';
		}
	}
	document.getElementById("repository-result-3-div").innerHTML = a;
	document.getElementById("count-repo-span").innerHTML = count;
	   }
  };
  xhttp2.open("GET", "https://api.github.com/users/supreetsingh247/repos", true);
  xhttp2.send();
}

 





