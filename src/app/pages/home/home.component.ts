import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { ProfileComponent } from '../../profile/profile.component';
import { ExperienceBarComponent } from '../../experience-bar/experience-bar.component';
import { ProjectComponent } from '../../project/project.component';
import { SkillComponent } from '../../skill/skill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    ProfileComponent,
    ExperienceBarComponent,
    ProjectComponent,
    SkillComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
