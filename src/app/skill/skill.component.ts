import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SkillService } from '../services/skill.service';
import { ISkill } from '../data/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,

  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent  implements OnInit{
  public show = true;
  public frontend = true;
  public skillsBackend: Array<ISkill> = []
  public skillsFrontend: Array<ISkill> = []
  constructor(private skillsService: SkillService ){}
  ngOnInit(): void {
    this.skillsBackend = this.skillsService.getProjectBackend();
    this.skillsFrontend = this.skillsService.getProjectFrontend();
  }

  showBackend(value: boolean){
    this.show = value;
  }
  showFrontend(value: boolean){
    this.frontend = value;
  }
}
