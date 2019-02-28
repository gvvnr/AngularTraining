import { Component, OnInit } from '@angular/core';
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
  data  = new Array('');
  userFilter: any = { name: '' };
  text="this is static text";
  NoteButton=true;
  textArea=false
  exist=false;
  constructor(private localstorage :LocalStorage) {
    localstorage.getItem('user').subscribe((data) => {

      this.data=data;
    });
  }


  ngOnInit() {

  }

  disable(){
         this.NoteButton=false;
         this.textArea=true;


  }
  retriveData(){
    this.data.push(this.myTextarea+'$'+this.today+' '+this.text);
    this.myTextarea='';
    this.NoteButton=true;
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
  }
  displayContainingData(content : any){
    this.myTextarea=content;
    this.deleteData=content;

  }

}
