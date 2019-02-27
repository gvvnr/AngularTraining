import { Component, OnInit } from '@angular/core';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.css']
})
export class NotePadComponent implements OnInit {
  myTextarea: any;
  deleteData : any;
   monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  date= new Date();
  today=this.monthNames[new Date().getMonth()]+" "+new Date().getDate()+" ,"+new Date().getFullYear()+" at "+new Date().toLocaleTimeString();
  //userFilter: any = [''];
  data  = new Array('');
  userFilter: any = { name: '' };

  constructor(private localstorage :LocalStorage) {

  }

  ngOnInit() {
   // this.enable=true;
    this.localstorage.getItem('user').subscribe((data) => {

      this.data=data;
      console.log(this.data);
    });
  }
  addValue(){

  }
  retriveData(){
    this.data.push(this.myTextarea+"\n"+this.today);
    this.myTextarea='';
    console.log(this.myTextarea);
    this.localstorage.setItem('user',this.data).subscribe(() =>{});




    }
  delete_Data(){
    for(let index=0; index<this.data.length; index++){
      if(this.data[index]==this.deleteData){

        this.data.splice(index,1);
        this.localstorage.setItem('user',this.data).subscribe(() =>{});
        this.myTextarea='';
      }
    }
    //alert(this.deleteData);
  }
  displayContainingData(content : any){
    //alert(content);
    this.myTextarea=content;
    this.deleteData=content;

  }

}
