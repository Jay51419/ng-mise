import { Injectable } from '@angular/core';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

@Injectable({
  providedIn: 'root'
})
export class ScrollbarService {
  scrollbar?: Scrollbar;
  constructor() {
    Scrollbar.use(ModalPlugin)
  }

  setScrollbar(s: Scrollbar) {
    this.scrollbar = s;
  }
  getScrollbar() {
    return this.scrollbar;
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
