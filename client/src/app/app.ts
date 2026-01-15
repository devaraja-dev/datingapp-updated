import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) 
  // Angular dependency injection
  // star guide has been updated and use signal function to inject dependencies.
  // When a class component is instantiated or object created
  // constructor is called and code inside executed first.

  // We use ngOnInIt in angular for initialization logic that needs to run
  // after the component's data-bound properties
export class App{
  protected router = inject(Router);

}
