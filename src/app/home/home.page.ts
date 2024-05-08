import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import * as jsonQuotes from '../../assets/data/quotes.json'
import data from '../../assets/data/quotes.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  quote: string = "";
  autor: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getData().subscribe(response => {
    //   console.log(response);
    // })
    this.generateQuote();


  }

  generateQuote() {
    // Generate a random number
    let randomNum = Math.floor(Math.random() * (data.length - 1));

    this.quote = data[randomNum]["q"];
    this.autor = data[randomNum]["a"];

    console.log(this.quote);
    console.log(this.autor);


  }

}
