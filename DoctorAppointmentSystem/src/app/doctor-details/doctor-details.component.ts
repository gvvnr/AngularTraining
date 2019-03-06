import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocDetails, HomePageComponent} from '../home-page/home-page.component';
import {SendDataService} from '../send-data.service';
import {Subscription} from 'rxjs';
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
  subscription: Subscription;
  docDetails: DocDetails[];
  constructor(private activatedRoute: ActivatedRoute, private dataserviceReciving: SendDataService) { }

  ngOnInit() {
    this.subscription = this.dataserviceReciving.getMessage().subscribe( message => {
      this.docDetails = message;
      console.log(this.docDetails);
    })

    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  }




}

