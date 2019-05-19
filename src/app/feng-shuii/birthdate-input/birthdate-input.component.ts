import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../profile';



@Component({
  selector: 'birthdate-input',
  templateUrl: './birthdate-input.component.html',
  styleUrls: ['./birthdate-input.component.scss']
})
export class BirthdateInputComponent implements OnInit {
  @Output() emitSign = new EventEmitter<string>()
  @Input() button = true;
  date: string;
  @Input() sign: Observable<Profile>;

  constructor() { }

  ngOnInit() {
  }
  getDate() {
    this.emitSign.emit(this.date);
}
}
