import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import { ScrollbarService } from './scrollbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-mise';

  constructor(private scrollWrapper: ElementRef<HTMLDivElement>, private scrollbar: ScrollbarService) { }
  ngAfterViewInit(): void {
    this.scrollbar.setScrollbar(Scrollbar.init(this.scrollWrapper.nativeElement))
  }


}
