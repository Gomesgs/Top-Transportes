import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { CtaComponent } from './cta/cta.component';
import { AboutComponent } from './about/about.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ContatosComponent } from './contatos/contatos.component';
import { BackgroundComponent } from "./background/background.component";
import { ButtonModule } from 'primeng/button';

// Importe os outros componentes conforme necessário

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundComponent,
    ButtonModule,
    HeaderComponent,
    CarouselComponent,
    ServicesComponent,
    FooterComponent,
    CtaComponent,
    AboutComponent,
    EquipmentsComponent,
    CarouselComponent,
    ContatosComponent,
    BackgroundComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-transportes';
}
