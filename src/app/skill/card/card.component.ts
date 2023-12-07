import { CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { ISkill } from '../../data/skills';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public secundPanel = false;

  @Input('skill') public skill: ISkill = {
    type: '',
    language: '',
    imageUrl: '',
    altImg: '',
    framework: '',
    skills: '',
    gitHub: '',
    tested: false,
    documented: false
}
  eventCard(value: boolean){
    this.secundPanel =  value;
  }
}
