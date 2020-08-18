import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
  providers: [ ProjectService ]
})
export class AdminDetailComponent implements OnInit {
  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
      private projectService: ProjectService,
      private router: Router,
      private route: ActivatedRoute
  ) {
      this.url = Global.url;
      this.confirm = false;
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
        const id = params.id;

        this.getProjectForAdmin(id);
    });
  }

  getProjectForAdmin(id) {
    this.projectService.getProjectForAdmin(id).subscribe(
        response => {
            this.project = response.project;
            console.log(response);
        },
        error => {
            console.log(error as any);
        }
    );
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }

  deleteProject(id) {
    this.projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          this.router.navigate(['/projects']);
        }
      },
      error => {
          console.log(error as any);
      }
    );
  }

}
