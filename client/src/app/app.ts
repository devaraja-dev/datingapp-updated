import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) 
  // Angular dependency injection
  // star guide has been updated and use signal function to inject dependencies.
  // When a class component is instantiated or object created
  // constructor is called and code inside executed first.

  // We use ngOnInIt in angular for initialization logic that needs to run
  // after the component's data-bound properties
export class App implements OnInit{
  private http = inject(HttpClient);
  protected title = 'Dating App';
  protected members = signal<any>([]);

  async ngOnInit() {
    this.members.set(await this.getMembers())
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get("https://localhost:5001/api/members"));
      
    } catch (error) {
      console.log(error);
      throw error;
      
    }
    
  }

}
