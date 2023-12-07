import {Injectable} from "@angular/core";
import skills from "../data/skills";

@Injectable({
  providedIn: 'root'
})

export class SkillService{
  private skills = skills;
  constructor(){}

  public getProjectBackend(){
    let backend = this.skills.slice();
    return backend.filter(
      (backend) => backend.type == 'backend'
    )
  }

  public getProjectFrontend(){
    let backend = this.skills.slice();
    return backend.filter(
      (backend) => backend.type == 'frontend'
    )
  }
}
