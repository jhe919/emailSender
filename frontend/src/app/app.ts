import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
});
