import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public saveProject;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
      private projectService: ProjectService,
      private uploadService: UploadService,
      private router: Router,
      private route: ActivatedRoute
  ) {
      this.title = 'Editar Proyecto';
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

  onSubmit(form: any) {
    this.projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {
          // Subir imagen
          if (this.filesToUpload.length >= 1) {

            this.uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              this.saveProject = result.project;

              this.status = 'success';
            });

          } else {
            this.saveProject = response.project;

            this.status = 'success';
          }

        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error as any);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    /* this.filesToUpload = <Array<File>>fileInput.target.files; */
    this.filesToUpload = fileInput.target.files as Array<File>;
    console.log(fileInput);
  }
}
