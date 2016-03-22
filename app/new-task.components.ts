import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create new task: </h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <select required #newPriority>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    <button (click)="addTask(newDescription, newPriority)" class="btn btn-lg">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement){
    var values = [userDescription.value, userPriority.value];
    this.onSubmitNewTask.emit(values);
    userDescription.value = "";
  }
}
