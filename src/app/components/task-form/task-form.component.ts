import { Component, OnInit, Output, EventEmitter } from '@angular/core';import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string;
  lugar: string;
  dia: string;
  contacto:string;
  description: string;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newLugar: HTMLInputElement, newDia: HTMLInputElement, newContacto: HTMLInputElement, newDescription: HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      lugar: newLugar.value,
      dia: newDia.value,
      contacto: newContacto.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newLugar.value = '';
    newDia.value = '';
    newContacto.value = '';
    newDescription.value = '';
    return false;
  }

}
