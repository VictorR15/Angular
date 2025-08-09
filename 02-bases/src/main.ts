<<<<<<< HEAD
import "./style.css";
// import "./topics/01-basic-types";
// import "./topics/02-object-inferface";
// import "./topics/03-functions";
// import "./topics/04-homework-types";
// import "./topics/05-basic-destructuring";
// import "./topics/06-funtion-destructuring";
import "./topics/08-classes";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `Hola Mundo`;
=======
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
>>>>>>> cf1ba48 (h)
