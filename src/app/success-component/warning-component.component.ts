import { Component} from '@angular/core';

@Component({
  selector: 'app-success-component',
  template: `<p>This is Success component</p>`,
  styles: [`
    p{
      border: 1px solid green;
      padding:5px;
      background-color:#12AD2B;
    }
  `]
})
export class SuccessComponentComponent{

}
