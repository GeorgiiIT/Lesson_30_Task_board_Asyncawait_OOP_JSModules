import Task from "./task.js"
import { API } from "../index.js"
import { controller } from "../index.js"
import NeedTesting from "./NeedTesting.js"

export default class InProgress  extends Task{
	constructor(task){
		super(task);
	}

	render(){
		let taskBlock = super.render();

		let btn = document.createElement(`button`);
		btn.innerHTML = `Need testing`;

		btn.addEventListener(`click`,async e =>{
			try{
				let modifiedTask = await controller(API+`/tasks/${this.id}`, `PUT`, {status: 2});
				taskBlock.remove();

				new NeedTesting(modifiedTask).render();
			} catch(err){
				console.log(err);
			}
		})

		taskBlock.append(btn);

		tasksTable.querySelector(`td#InProgress`).append(taskBlock);
	}
}

