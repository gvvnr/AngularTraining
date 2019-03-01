import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public cities: any = ['Hyderabad', 'Guntur' , 'chennai'];
  id : any = 1;
  sample : any;

  category: any = ['school', 'college'];
  selected: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ChangingValue( val: any) {
    console.log(val);
  }
  checking() {
    alert('checked :');
    this.router.navigate(['doctorDetails'], this.id  );
  }

}
