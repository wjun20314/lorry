import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'chgpwd', loadChildren: './pages/chgpwd/chgpwd.module#ChgpwdModule' },
  { path: 'report', loadChildren: './pages/report/report.module#ReportModule' },
  { path: 'profile', loadChildren: '/pages./profile/profile.module#ProfileModule' },
  { path: 'chgemail', loadChildren: './pages/chgemail/chgemail.module#ChgemailModule' },
  { path: 'termuse', loadChildren: './pages/termuse/termuse.module#TermuseModule' },
  { path: 'privacypolicy', loadChildren: './pages/privacypolicy/privacypolicy.module#PrivacypolicyModule' },
  { path: 'order', loadChildren: './pages/order/order.module#OrderModule' },
  { path: 'summaryrpt', loadChildren: './pages/summaryrpt/summaryrpt.module#SummaryrptPageModule' },
  { path: 'salesrpt', loadChildren: './pages/salesrpt/salesrpt.module#SalesrptPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
