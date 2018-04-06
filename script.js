"use strict";

let todoApp = new Vue({
    el: "#todo-app",
    data: {
        title: "Užduočių sąrašas",
        subtitle: "Šiandien padaryti",
        doneSubtitle: "Atlikta",
        tasks: [

        ],
        userInput: "",
        run: false
    },
    methods: {
        addNewItem: function(){
            let newTask = {
                text: this.userInput,
                done: false
            }

            if(this.userInput.length < 1 || this.tasks.find(item => item.text.toLowerCase() === this.userInput.toLowerCase())){
                this.run = true;
                this.userInput = this.task.text;
            } else {
                this.run = false;
                this.tasks.push(newTask);
            }
            this.userInput = "";
        },
        deleteItem: function(taskDeleteItem){
            let confirmDelete = confirm("Ar tikrai norite ištrinti?");

            if (confirmDelete == true){
                let indexOfItemDelete = this.tasks.indexOf(taskDeleteItem);
                this.tasks.splice(indexOfItemDelete, 1);
            }
        },
        getFinishedCount: function(){
            let finishedTasks = this.tasks.filter(item => item.done === true);
            return finishedTasks.length;
        }
    },
    computed: {
        filterFinishedData: function(){
            let filterTaskInfo = this.tasks.filter(item => item.done === true);
            return filterTaskInfo;
        },
        filterInputData: function(){
            if (this.tasks.filter(item => item.text.toLowerCase() === this.userInput.toLowerCase()).length > 0){
                return "form-control is-invalid";
            }
        }
    }
});
