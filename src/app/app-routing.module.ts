import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'posts', component: PostListComponent},
      {path: 'posts/:id', component: PostDetailComponent},
      {path: 'my-posts', component: PostEditComponent},
      {path: 'create', component: PostCreateComponent},
      {path: 'members', component: CommunityComponent},
      {path: '**', component: HomeComponent, pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
