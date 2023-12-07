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
  public getProjectAwsCDK(){
    let awsCDK = this.skills.slice();
    return awsCDK.filter(
      (awsCDK) => awsCDK.type == 'aws-cdk'
    )
  }
  public getProjectFrontend(){
    let frontend = this.skills.slice();
    return frontend.filter(
      (frontend) => frontend.type == 'frontend'
    )
  }
}
