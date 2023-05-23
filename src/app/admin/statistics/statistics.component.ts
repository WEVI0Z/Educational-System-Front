import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Statistic } from "src/app/shared/interfaces/statistic.interface";
import { StatisticsService } from "./statistics.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  protected stats: Observable<Statistic[]> = this.service.get();

  constructor(
    private service: StatisticsService,
  ) {}
}
