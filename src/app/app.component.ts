import { AfterViewInit, Component, ElementRef } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { ScrollbarService } from './scrollbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'ng-mise';

  constructor(
    private scrollWrapper: ElementRef<HTMLDivElement>,
    private scrollbar: ScrollbarService
  ) {}
  ngAfterViewInit(): void {
    this.scrollbar.setScrollbar(
      Scrollbar.init(this.scrollWrapper.nativeElement)
    );
  }
}
