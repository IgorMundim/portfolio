import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',

})
export class ProfileComponent {
  public english = true;
  public technique= true;
  public graduate= true;
  public master= true;

  eventMaster(value: boolean){
    this.master = value;
  }

  eventGraduate(value: boolean){
    this.graduate = value;
  }
  eventEnglish(value: boolean){
    this.english = value;
  }

  eventTechnique(value: boolean){
    this.technique = value;
  }
}
