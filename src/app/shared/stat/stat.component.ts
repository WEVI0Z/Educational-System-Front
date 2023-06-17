import { Component, Input } from "@angular/core";

@Component({
  selector: "app-stat",
  templateUrl: "./stat.component.html",
  styleUrls: ["./stat.component.scss"]
})
export class StatComponent {
  @Input()
  firstName!: string;

  @Input()
  middleName!: string;
  
  @Input()
  lastName!: string;

  @Input()
  documentName!: string;

  @Input()
  date!: Date
}
