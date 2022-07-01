import Task from "./task.js"
import { controller } from "../index.js"
import { API } from "../index.js"
import ToDo from "./ToDo.js"

 
 export default class Reopened  extends Task{
	constructor(task){
		super(task);
	}

	render(){
		let taskBlock = super.render();

		let btnRestart = document.createElement(`button`);
		btnRestart.innerHTML = `Restart`;

		btnRestart.addEventListener(`click`,async e =>{
			try{
				let modifiedTask = await controller(API+`/tasks/${this.id}`, `PUT`, {status: 0});
				taskBlock.remove();

				new ToDo(modifiedTask).render();
			} catch(err){
				console.log(err);
			}
		})

		taskBlock.append(btnRestart);

		tasksTable.querySelector(`td#Reopened`).append(taskBlock);
	}
}