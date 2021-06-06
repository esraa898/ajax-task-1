function ajaxData(){
var ajax = new XMLHttpRequest();
ajax.open("GET","https://reqres.in/api/users?page=2" );
ajax.send();
var final = '';
ajax.onreadystatechange = function (){
    if (ajax.readyState == 4 &&  ajax.status == 200){
        var content = (JSON.parse(ajax.response));
 for (var i=0; i < content.data.length ; i++){


   final += `
   <div class= "cont">
    <div class = "data">
      <div class= "imgs" ><img  class= "data-img" src = "${content.data[i].avatar}"></div>
     <h2 class = "data-text">  Name : ${content.data[i].first_name} ${content.data[i].last_name} </h2>
     
     <p class ="data-email"> Email: ${content.data[i].email} </p>
     

   </div>
   </div>
  
   `
        }
    }
    document.querySelector(".container").innerHTML = final;
}
}
ajaxData();



