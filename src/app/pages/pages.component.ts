import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {

    let theme = `default-dark`;
    
    if ( localStorage.theme ) {
      theme = localStorage.theme;
    }

    this.linkTheme.setAttribute('href', `./assets/css/colors/${ theme }.css`);
    
  }

}
