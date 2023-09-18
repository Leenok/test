import { Component,  Input, Output } from '@angular/core';


@Component({
  selector: 'app-shelfs',
  templateUrl: './shelfs.component.html',
  styleUrls: ['./shelfs.component.scss']
})

export class ShelfsComponent {
  @Input() viewRacks = [] ;

  show(event:any){
   event.target.children[0].classList.remove("noVisible");
  }

  hide(event:any){
    event.target.children[0].classList.add("noVisible");
  }
}
