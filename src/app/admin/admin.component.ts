import { Component } from "@angular/core";
import { DocumentsService } from "./documents/documents.service";
import { Observable } from "rxjs";
import { Document } from "../shared/interfaces/documents.interface";
import { StatisticsService } from "./statistics/statistics.service";
import { Statistic } from "../shared/interfaces/statistic.interface";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent {
  protected documents: Observable<Document[]> = this.documentsService.get("", 6);
  protected stats: Observable<Statistic[]> = this.statisticsService.get(10);

  constructor(
    private documentsService: DocumentsService,
    private statisticsService: StatisticsService,
  ) {}
}
