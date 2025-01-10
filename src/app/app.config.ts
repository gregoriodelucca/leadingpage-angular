import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: '', component: HeaderComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'about', component: AboutComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ]
};
