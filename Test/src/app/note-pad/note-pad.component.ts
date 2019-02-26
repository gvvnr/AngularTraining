import { Component, OnInit } from '@angular/core';
import { FilterPipeModule } from 'ngx-filter-pipe';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.css']
})
export class NotePadComponent implements OnInit {
  myTextarea: any;
  deleteData : any;
  date= new Date();
  //userFilter: any = [''];
  data  = new Array('');
  userFilter: any = { name: '' };

  constructor() {

  }

  ngOnInit() {
   // this.enable=true;
  }
  addValue(){

  }
  retriveData(){
    this.data.push(this.myTextarea);
    this.myTextarea='';
    console.log(this.myTextarea);



    }
  delete_Data(){
    for(let index=0; index<this.data.length; index++){
      if(this.data[index]==this.deleteData){

        this.data.splice(index,1);
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
