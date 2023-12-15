import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-experience-bar',
  standalone: true,
  imports: [],
  templateUrl: './experience-bar.component.html',
  styleUrl: './experience-bar.component.scss'
})
export class ExperienceBarComponent {
  constructor(private router: Router){}
  openChevroletLink():void{
      this.router.navigate(["/chevrolet"]);''
  }
}
