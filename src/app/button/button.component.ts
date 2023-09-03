import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button'
  
  @Input() backgroundColor: string = '#839232'

  @Input() color: 'red' | 'blue' = 'red'

}
