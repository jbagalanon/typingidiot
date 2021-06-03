import { Component } from '@angular/core';
import { lorem } from 'faker';

lorem.sentence();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  solved = false;

  onInput(value: string) {
    if (value === this.randomText) {
      this.solved = true;
    }
  }
}
