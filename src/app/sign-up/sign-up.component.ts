import { Component, OnInit } from '@angular/core';
import { User } from '../User'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: User = new User('tata','nana','monemail@gmail.fr','dfhdgkjdgk');
  constructor() { }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

}
