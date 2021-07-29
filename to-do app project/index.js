let addbutton=document.getElementById('add');
let inputField=document.getElementById("inputField");
let todocontainer=document.getElementById("todoContainer");


addbutton.addEventListener("click", addToDo);
function addToDo(){
  var para = document.createElement('p');
  para.classList.add('paraStyle');
  var butt1=document.createElement('button');
  butt1.classList.add('butt1style');
  butt1.innerText="DONE"
  var butt2=document.createElement('button');
  butt2.classList.add('butt2style');
  butt2.innerText="DELETE";
  para.innerText = inputField.value;
  
  //para.innerHTML=<button> para </button>
  todocontainer.appendChild(para);
  todocontainer.appendChild(butt1);
  todocontainer.appendChild(butt2);

  inputField.value="";
  butt1.addEventListener("click",function(){
    para.classList.add('butt3style');
  })
  
  
  butt2.addEventListener("click",function(){
    todocontainer.removeChild(para);
    todocontainer.removeChild(butt1);
    todocontainer.removeChild(butt2);
    
  })
}