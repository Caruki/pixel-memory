import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GameRouteGuard } from './services/game-route-guard.service';
import { PlayerService } from './services/player.service';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'game', component: GameComponent, canActivate: [GameRouteGuard]},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GameRouteGuard, PlayerService]
})
export class AppRoutingModule { }
