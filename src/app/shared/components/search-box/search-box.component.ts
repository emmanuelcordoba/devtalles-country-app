import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onSearch.emit(value);
    })
  }

  ngOnDestroy(): void{
    this.debouncerSubscription?.unsubscribe();
  }

  emitSearch(value: string): void {
    this.onSearch.emit(value);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
