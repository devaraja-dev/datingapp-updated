import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
  
  // services are singleton, so they are instantiated when angular
  // application starts. 
  // We gonna end up creating like javascript code not 
  // typical typescript code.
  // because we need to use things like document get element by id, etc
  // it's gonna be seems strange but this is gonna help us avoid 
  // third party services.
export class ToastService {


  constructor() { 
    this.createToastContainer();
  }

  private createToastContainer() {
    if (!document.getElementById('toast-container')) {
      const container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast toast-bottom toast-end'
      document.body.appendChild(container)
    }
  }

  // another helper method
  private createToastElement(message: string, alertClass: string,
        duration = 5000) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.classList.add('alert', alertClass, 'shadow-lg');
    toast.innerHTML = `
      <span>${message}</span>
      <button class="ml-4 btn btn-sm btn-ghost">x</button>
    `

    toast.querySelector('button')?.addEventListener('click', () => {
      toastContainer.removeChild(toast);
    })

    toastContainer.append(toast);

    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
    }, duration);
  }
  
  success(message: string, duration?: number) {
    this.createToastElement(message, 'alert-success', duration);
  }

  error(message: string, duration?: number) {
    this.createToastElement(message, 'alert-error', duration);
  }

  warning(message: string, duration?: number) {
    this.createToastElement(message, 'alert-warning', duration);
  }

  info(message: string, duration?: number) {
    this.createToastElement(message, 'alert-info', duration);
  }


}
