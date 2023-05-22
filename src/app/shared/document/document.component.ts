import { Component, Input } from '@angular/core';

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
}
