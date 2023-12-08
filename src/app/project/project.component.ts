import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProjectService } from '../services/projects.service';
import { IProject } from '../data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,

  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent  implements OnInit{
  public show = true;
  public frontend = true;
  public awsCDK = true;
  public productsBackend: Array<IProject> = []
  public productsFrontend: Array<IProject> = []
  public productsAwsCDK: Array<IProject> = []
  constructor(private productsService: ProjectService ){}
  ngOnInit(): void {
    this.productsBackend = this.productsService.getProjectBackend();
    this.productsFrontend = this.productsService.getProjectFrontend();
    this.productsAwsCDK = this.productsService.getProjectAwsCDK();
  }

  showBackend(value: boolean){
    this.show = value;
  }
  showFrontend(value: boolean){
    this.frontend = value;
  }
  showAwsCDK(value: boolean){
    this.awsCDK = value;
  }
}
