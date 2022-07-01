import Task from "./task.js"
import { controller } from "../index.js"
import { API } from "../index.js"
import Testing from "./Testing.js"


export default class NeedTesting  extends Task{
	constructor(task){
		super(task);
	}

	render(){
		let taskBlock = super.render();

		let btn = document.createElement(`button`);
		btn.innerHTML = `Start Testing`;

		btn.addEventListener(`click`,async e =>{
			try{
				let modifiedTask = await controller(API+`/tasks/${this.id}`, `PUT`, {status: 3});
				taskBlock.remove();

				new Testing(modifiedTask).render();
			} catch(err){
				console.log(err);
			}
		})
		taskBlock.append(btn);

		tasksTable.querySelector(`td#NeedTesting`).append(taskBlock);
	}
}