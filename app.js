let app = new Vue({
el: "#app",
data: { 
    newTaskName: null,
    tasks: [{
        id: 1,
        title: "Buy Shawarma",
        done: false
    },
    {
        id: 2,
        title: "pick up drycleaning",
        done: false
    }
]
},
methods: {

    del(task){
this.tasks = this.tasks.filter(item => item.id !== task.id)
    },
    saveTask(e){
        // check if it is a duplicate
        
// Get the id of last task
    let lastTaskIdex =   this.tasks.length -1;
    let lastTask = this.tasks[lastTaskIdex];
    let newTaskId = lastTask.id +1;
        let newTask = {
id : newTaskId,
title: this.newTaskName,
done: false
        };
        //Add the new task to the existing ones
        this.tasks.push(newTask);
        // Clear task field
        this.newTaskName = null;
    }
},
checkDuplicate(newTaskName){
    let duplicate = false;
    this.task.forEach(task =>{
        if(task.title == newTaskName){
            duplicate = true;
        }
    });
    return duplicate;
}
});