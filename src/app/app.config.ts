import { ApplicationConfig,} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './token.interceptor';
import { loaderInterceptor } from './loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})), provideClientHydration(withEventReplay()), provideHttpClient(withInterceptors([tokenInterceptor, loaderInterceptor]))]
};
