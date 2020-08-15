import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() { }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  onCLick(): void{
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }

}
