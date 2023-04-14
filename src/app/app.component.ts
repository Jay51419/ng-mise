import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-mise';
  showMenu = false;
  scrollbar?: Scrollbar;
  
  constructor(private scrollWrapper: ElementRef<HTMLDivElement>) { }
  ngAfterViewInit(): void {
    Scrollbar.use(ModalPlugin)
    this.scrollbar = Scrollbar.init(this.scrollWrapper.nativeElement, {  })
  }
  toggleShowMenu() {
    this.showMenu = !this.showMenu
    this.scrollbar?.updatePluginOptions('modal', { open: this.showMenu })
  }

}



class ModalPlugin extends ScrollbarPlugin {
  static override pluginName = 'modal';

  static override defaultOptions = {
    open: false,
  };

  override transformDelta(delta: any) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}
