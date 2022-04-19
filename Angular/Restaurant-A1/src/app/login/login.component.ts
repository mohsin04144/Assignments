import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  Username;
  Password;
  invalid=false;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) data){}


  ngOnInit(): void {
  }

  doAction(){
   let role="user";
    if(this.Username==="Mohsin" && this.Password ==="password"){
        role="admin";
        this.dialogRef.close({data:role});
    }
    else if(this.Username==="shaik" && this.Password==="pass"){
      role="owner";
      this.dialogRef.close({data:role});
    }
    else{
      this.invalid=true;
    }
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
