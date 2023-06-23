import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter<string>()
  //public onSearch = new EventEmitter<string>();

  emitSearch(value: string): void {
    this.onSearch.emit(value);
  }

}
