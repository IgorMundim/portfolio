import { CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { IProject } from '../../data/data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public secundPanel = false;

  @Input('product') public project: IProject = {}
  eventCard(value: boolean){
    this.secundPanel =  value;
  }
}
