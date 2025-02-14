import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient( 
      withFetch()
    ),
    provideAnimations(),
    provideToastr({
      timeOut: 3000, // Tempo de exibição
      positionClass: 'toast-top-right', // Posição
      preventDuplicates: true, // Evita repetição de notificações
    }),
  ]
};
