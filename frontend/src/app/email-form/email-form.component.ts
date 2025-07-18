import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email-form.html'
})
export class EmailFormComponent {
  name = '';
  email = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://localhost:3000/api/email', {
      name: this.name,
      email: this.email
    }).subscribe({
      next: () => alert('Email sent!'),
      error: err => alert('Error: ' + err.message)
    });
  }
}
