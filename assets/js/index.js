document.addEventListener("DOMContentLoaded", function(){

  getTasks();

  document.getElementById('retrieve').addEventListener('click',getTasks);

  document.getElementById('task-button').addEventListener('click',addTasks);

  function getTasks (){
    const listElement = document.getElementById('task-list');
    fetch('http://localhost:8000/toDos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) =>res.json())
    .then((res) =>{
      console.log('get tasks called')
      for(let i = 0; i < res.length; i++){
        if(!document.getElementById(res[i]._id)){
          console.log('response: ',res[i])
          let listItem = document.createElement('li');
          listItem.id = res[i]._id;
          listItem.innerText = res[i].task;
          let button = document.createElement('button');
          button.className = 'remove';
          button.innerText = 'X';
          button.addEventListener('click',removeTasks)
          listItem.appendChild(button);
          listElement.appendChild(listItem);
        }
      }
    });
  }

  function addTasks(){
    const task = document.getElementById('task').value;
    document.getElementById('task').value = '';
    fetch('http://localhost:8000/toDos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({task})
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
      location.reload();
      return getTasks();
    });
  }

  function removeTasks(e){
    const id = e.target.parentNode.id;
    fetch(`http://localhost:8000/toDos:id?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id)
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
      location.reload();
      return getTasks();
    });
  }
});



