import { HttpClient } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-test';
  operators = [];
  param1: any;
  param2: any;
  result: any;
  selectedValue:any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:37126/api/Calc/Operators').subscribe(data => {
      this.operators = data;
    })
  }
  calc() {
    let url = `http://localhost:37126/api/Calc/Calc?param1=${this.param1}&param2=${this.param2}&operatorName=${this.selectedValue}`;
    this.http.get(url).subscribe(data => {
      this.result = data;
    })
  }


}

