import Task from "./task.js"
import { API } from "../index.js"
import { controller } from "../index.js"
import InProgress from "./InProgress.js"





 
 export default class ToDo extends Task{
	constructor(task){
		super(task);
	}



	render(){
		let taskBlock = super.render();

		let btn = document.createElement(`button`);
		btn.innerHTML = `Start doing`;

		

		btn.addEventListener(`click`, async e =>{
			try{
				let modifiedTask = await controller(API+`/tasks/${this.id}`, `PUT`, {status: 1});
				taskBlock.remove();
				
				new InProgress(modifiedTask).render();
			} catch(err){
				console.log(err);
			}
			

		})

		taskBlock.append(btn);

		tasksTable.querySelector(`td#ToDo`).append(taskBlock);
	}
}

