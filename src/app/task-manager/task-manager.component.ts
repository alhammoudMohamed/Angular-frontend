import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  @Input() task: string;
  @Input() deadline: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmitButton() {

}
}
