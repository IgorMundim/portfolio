import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLink,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  home = '<Hello World />';


  // constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    // this.activatedRoute.fragment.subscribe((value) => {
    //   this.jumpTo(value as string);
    //   console.log(value)
    // })
  }

  jumpTo(section: string){
    section == 'home'?
     window.scrollTo({ top: 0, behavior: 'smooth' }) :
     document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }
}
