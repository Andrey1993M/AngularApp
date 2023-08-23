import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthComponent }, // Страница авторизации
  {
    path: 'posts',
    component: PostsComponent, // Страница с таблицей постов
    canActivate: [AuthGuard] // Используйте AuthGuard для ограничения доступа
  },
  {
    path: 'posts/:id', // Страница поста по ID
    component: PostDetailsComponent,
    canActivate: [AuthGuard] // Используйте AuthGuard для ограничения доступа
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // По умолчанию перенаправление на страницу авторизации
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }