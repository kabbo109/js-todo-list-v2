const list = document.getElementById('list');

function load(){
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  list.innerHTML = '';

  todos.forEach((t,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${t.done ? 'done' : ''}"
        onclick="toggle(${i})">${t.text}</span>
      <button onclick="remove(${i})">x</button>
    `;
    list.appendChild(li);
  });
}

function add(){
  const input = document.getElementById('todo');
  if(!input.value) return;

  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push({ text: input.value, done:false });
  localStorage.setItem('todos', JSON.stringify(todos));
  input.value = '';
  load();
}

function toggle(i){
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos[i].done = !todos[i].done;
  localStorage.setItem('todos', JSON.stringify(todos));
  load();
}

function remove(i){
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.splice(i,1);
  localStorage.setItem('todos', JSON.stringify(todos));
  load();
}

load();
