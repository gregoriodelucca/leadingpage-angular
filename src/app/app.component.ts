import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Definindo o componente como independente
  imports: [HeaderComponent, HeroComponent, AboutComponent, FeaturesComponent, ContactComponent]  // Importando os componentes necessários
})
export class AppComponent {
  title = 'landing-page-angular';
}
