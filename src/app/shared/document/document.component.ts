import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { StatisticsService } from "src/app/admin/statistics/statistics.service";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  @Input()
  title!: string;

  @Input()
  file!: string;

  @Input()
  createdAt!: Date;

  @Input()
  category!: string;

  @Input()
  id!: number;

  @Input()
  isAdmin: boolean = false

  constructor(
    private statisticsService: StatisticsService
  ) {}

  createStat(documentId: number) {
    this.statisticsService.create(documentId);
  }
}
