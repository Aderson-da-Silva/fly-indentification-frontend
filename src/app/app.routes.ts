import { Routes } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { SearchFlyGenusComponent } from './modules/components/search-fly-genus/search-fly-genus.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'fly-genus', component: SearchFlyGenusComponent}
];
