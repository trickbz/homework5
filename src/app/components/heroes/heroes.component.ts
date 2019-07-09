import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.createDataHttp.subscribe((data) => {
      console.log(data);
    });
  }
}
