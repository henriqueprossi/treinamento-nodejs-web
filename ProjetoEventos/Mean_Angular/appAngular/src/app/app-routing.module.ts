import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'pagamentos', component: PagamentosComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
