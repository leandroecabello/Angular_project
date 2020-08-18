import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ ProjectService ]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor(
      private projectService: ProjectService,
      private router: Router,
      private route: ActivatedRoute
  ) {
      this.url = Global.url;
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
        const id = params.id;

        this.getProject(id);
    });
  }

  getProject(id) {
    this.projectService.getProject(id).subscribe(
        response => {
            this.project = response.project;
            console.log(response);
        },
        error => {
            console.log(error as any);
        }
    );
  }

}
