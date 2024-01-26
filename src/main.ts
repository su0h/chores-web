import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

if (environment.production) {
  console.log("Environment is running in production mode!");
} else {
  console.log("Environment is running in dev mode!");
}