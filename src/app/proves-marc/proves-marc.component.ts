import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-proves-marc',
  templateUrl: './proves-marc.component.html',
  styleUrls: ['./proves-marc.component.css']
})
export class ProvesMarcComponent {

  constructor(private http: HttpClient) {
    this.http.post<any>("http://localhost:3020/Examen/ex1/marc", {}).subscribe();
    this.http.post<any>("http://localhost:3020/Examen/ex3/marc", {}).subscribe();
  }

}
