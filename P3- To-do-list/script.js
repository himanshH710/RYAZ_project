let task = [];

const savetask =() => {
    localStorage.setItem("task", JSON.stringify(task));
}

const addtask = () => {
  const taskInput = document.getElementById("task-input");
  const taskValue = taskInput.value.trim();
  if(taskValue){
    task.push({ taskValue:taskValue, completed: false });
    taskInput.value = "";
    Updatetask();
    Updatestats();
    savetask();
  }
};

const toggletaskcomplete = (index) => {
    task[index].completed = !task[index].completed;
    Updatetask();
    Updatestats();
    savetask();
}

const deleteTask = (index) => {
    task.splice(index, 1);
    Updatetask();
    Updatestats();
    savetask();
}

const editTask = (index) => {
    const taskInput = document.getElementById("task-input");
    taskInput.value = task[index].taskValue;
    task.splice(index, 1);
    Updatetask();
    Updatestats();
    savetask(); 
}

const Updatestats = () => {
    const completedTasks = task.filter(t => t.completed).length;
    const totalTasks = task.length;
    const progress = completedTasks / totalTasks * 100;
    const progressBar = document.getElementById("progress");
    progressBar.style.width = `${progress}%`;

    document.getElementById("numbers").innerText = `${completedTasks} / ${totalTasks}`;
    document.getElementById("progressbar").style.display = totalTasks > 0 ? "block" : "none";
    if (task.length && completedTasks === totalTasks && totalTasks > 0) {
        blast();
    }
}


const Updatetask = () => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML =""
  task.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div class="taskItem">
             <div class="task ${task.completed ? 'completed' : ''}">
                 <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
                <p>${task.taskValue}</p>
             </div>
             <div class="icons">
                 <i class="fa-solid fa-pen-to-square" onclick="editTask(${index})" ></i>
                 <i class="fa-solid fa-trash-can" onclick="deleteTask(${index})"></i>
             </div>
      </div>
      `;
      listItem.addEventListener('change',()=>toggletaskcomplete(index));
      taskList.append(listItem);
  });
};

document.getElementById("new-task").addEventListener("click", function (e) {
  e.preventDefault();

  addtask();
});

const blast = () => {
    const duration = 5 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}
