const todos=[];function loadTasks(){const t=localStorage.getItem("tasks");t&&(todos.length=0,todos.push(...JSON.parse(t)))}function updateIndexes(){todos.forEach(((t,s)=>{t.index=s})),localStorage.setItem("tasks",JSON.stringify(todos))}function addTask(t){const s={description:t,completed:!1,index:todos.length};todos.push(s),localStorage.setItem("tasks",JSON.stringify(todos))}function deleteTask(t){todos.splice(t,1),updateIndexes(),localStorage.setItem("tasks",JSON.stringify(todos))}function editTask(t,s){const o=todos.find((s=>s.index===t));o&&(o.description=s,localStorage.setItem("tasks",JSON.stringify(todos)))}export{todos,addTask,deleteTask,editTask,loadTasks,updateIndexes};