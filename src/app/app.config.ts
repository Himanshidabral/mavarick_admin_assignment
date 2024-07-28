import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http"
import { AuthInterceptor } from './Interceptors/auth.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
  provideRouter(routes), 
  provideToastr(),
   provideAnimationsAsync(), provideHttpClient(withInterceptorsFromDi()),

  {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  },

],
};
