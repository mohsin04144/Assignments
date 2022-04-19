import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>Mohsin</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Hidden</h2>    
    </ng-template>
    
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
    
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
    
    <h2>
     {{name}}
    </h2>
    <h2>
     {{name|lowercase}}
    </h2>
    <h2>
     {{name|uppercase}}
    </h2>
    <h2>{{message|titlecase}}</h2>
    <h2>{{name|slice:3:5}}</h2>
    <h2>{{person|json}}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'INR'}}</h2>
    <h2>{{0.25 | currency:'INR':'code'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>

    
    <button (click)="onClick($event)">Greet</button>

    <button (click)="greeting = 'Welcome Mohsin'">Greet Mohsin</button> 
      <h2>{{greeting}}</h2>
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">Log</button>   
`,
  
  styles:[]
})
export class TestComponent implements OnInit {
  displayName = true;
  public name = "Mohsinnn"
  public message="welcome Mohsin"
  public person={
    "firstName":"Shaik",
    "lastName":"Mohsin"
  }

  public date = new Date();

  public greeting = "";
  public color ="blue";

  public colors = ["red","blue","green","yellow"]
 
 

  
  constructor() { }

  


  ngOnInit(): void {
  }
  
  

  onClick(event: any){
    console.log(event);
    this.greeting=event.type;
  }
  logMessage(value: any){
    console.log(value)
  }
  
}
