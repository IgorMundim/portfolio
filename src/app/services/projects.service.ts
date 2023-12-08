import {Injectable} from "@angular/core";
import data from "../data/data";

@Injectable({
  providedIn: 'root'
})

export class ProjectService{
  private projects = data;
  constructor(){}

  public getProjectBackend(){
    let backend = this.projects.slice();
    return backend.filter(
      (backend) => backend.type == 'backend'
    )
  }
  public getProjectAwsCDK(){
    let awsCDK = this.projects.slice();
    return awsCDK.filter(
      (awsCDK) => awsCDK.type == 'aws-cdk'
    )
  }
  public getProjectFrontend(){
    let frontend = this.projects.slice();
    return frontend.filter(
      (frontend) => frontend.type == 'frontend'
    )
  }
}
