import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home/crisis-center-home.component";

/*
 * The router displays the components of these routes in the RouterOutlet of the CrisisCenterComponent,
 * not in the RouterOutlet of the AppComponent shell.
 * The CrisisListComponent contains the crisis list and a RouterOutlet to display the Crisis Center Home and Crisis Detail route components.
 */
const routes: Routes = [
  {
    path: 'tour-of-heroes/crisis-center',
    component: CrisisCenterComponent,
    data: { animation: 'crises' },
    children: [
      {
        /*
         * At the top level, paths that begin with / refer to the root of the application. But child routes extend the path of the parent route. With each step down the route tree, you add a slash followed by the route path, unless the path is empty.
         */
        path: '',
        component: CrisisListComponent,
        data: { animation: 'crises' },
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            data: { animation: 'crisis'}
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
