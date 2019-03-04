import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
export interface DocDetails {
  name: string;
  id: number;
  type: string;
}
const DOCDATA: DocDetails[] = [
  {name : 'Vamsi', id: 1  , type: 'dentist'},
  {name: 'harish', id: 2 , type: 'dentist'}
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})




export class HomePageComponent implements OnInit {
  public cities: any = ['Hyderabad', 'Guntur' , 'chennai'];
  id: any;
  sample: any;
  dataSource = DOCDATA;
  category: any = ['school', 'college'];
  selected: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  valid: any;
  ChangingValue( val: any) {
    console.log(val);
  }
  checking(doctor: DocDetails) {
    this.id = doctor.name;
    this.valid = 'zassd';
    alert('hello');
    setTimeout(() => {
      this.router.navigate(['/doctorDetails', doctor.id]); }, 1000);
 //  this.router.navigate(['/doctorDetails', doctor.id]);
  }

}
