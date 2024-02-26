let arr2 =[
    {item:'milk',duedate:'11/11/2023'},
];

let Directory = JSON.parse(localStorage.getItem("record"));

if(Directory!==null)
{
    arr2=Directory;
}

displayTodo();

function addTodo()
{
    let todoInput = document.querySelector('#todo-Input');
    let todoDate = document.querySelector('#todo-Date');
        
              arr2.push({item:todoInput.value , duedate:todoDate.value});
              localStorage.setItem("record", JSON.stringify(arr2));
 

              todoInput.value ='';
              todoDate.value ='';
              displayTodo();                
}

function displayTodo()
{
    let showList = document.querySelector("#show");
    showList.innerHTML ='';
    for(let i=0; i<arr2.length;i++)
    {
             let   {item , duedate } = arr2[i]
       showList.innerHTML = showList.innerHTML + ` 
      
    <div class="you">
                    <div class="hero11"> ${item} </div>  
                    <div class="hero22"> ${duedate} </div>  
                    <div class="hero33"> <button class="del" onclick="del(${i});"> Delete </button> </div> 
    </div>
       `;

       
    }
}

function del(position)
 { 
     arr2.splice(position, 1);
     localStorage.setItem("record", JSON.stringify(arr2));
      displayTodo();

 }


