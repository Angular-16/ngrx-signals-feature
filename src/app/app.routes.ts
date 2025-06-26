import { Route } from "@angular/router";

export const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./features/home/home.component')},
    { path: 'quiz', loadComponent: () => import('./features/quiz/quiz.component')}
]