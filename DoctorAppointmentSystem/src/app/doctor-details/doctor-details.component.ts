import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocDetails, HomePageComponent} from '../home-page/home-page.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() samp: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.samp);
  }

}

