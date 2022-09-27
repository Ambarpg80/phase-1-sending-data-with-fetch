// Add your code here
function submitData(name, email){


const newPost = { //Creates Post 
    method: "POST",
    headers:{
       'Content-Type' : 'application/json',
       'Accept':'application/json',
          },
    body: JSON.stringify({
    name ,
    email ,
    }),
    };

return fetch('http://localhost:3000/users',newPost)
.then(response => response.json())
.then(resObject => document.body.innerHTML = resObject.id)//returned response Object
.catch(error => document.body.innerHTML = error.message)
 
}

submitData();





//function submitData(name){

//}
//submitData();
/**/