import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminDetailComponent } from './components/admin-detail/admin-detail.component';


const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about_me', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'create_project', component: CreateComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'project/:id', component: DetailComponent},
  { path: 'project/admin/:id', component: AdminDetailComponent},
  { path: 'edit_project/:id', component: EditComponent},
  { path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
