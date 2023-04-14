import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ScrollbarService } from '../scrollbar.service';


interface ReviewModel {
  profileUrl: string;
  review: string;
  videoUrl: string;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  showMenu = false;
  senderAmount = 10000;
  senderCurrency = "INR"
  recipientCurrency = "USD"
  recipientCurrencyRate = 82.0102
  bankTransferFees = 0;
  ourFees = 329.94;
  totalFees = this.bankTransferFees + this.ourFees;
  totalAmount = this.senderAmount - this.totalFees;
  recipientAmount = (this.totalAmount / this.recipientCurrencyRate).toFixed(2)
  senderErrorMessage = ""
  showErrorMessage = false
  reviews: ReviewModel[] = [
    {
      profileUrl: "assets/us.png",
      review: "Mise has changed the game in terms of simplicity and certainly been a lifesaver for expat living.",
      videoUrl: ""
    },
    {
      profileUrl: "assets/us.png",
      review: "Mise has changed the game in terms of simplicity and certainly been a lifesaver for expat living.",
      videoUrl: ""
    },
    {
      profileUrl: "assets/us.png",
      review: "Mise has changed the game in terms of simplicity and certainly been a lifesaver for expat living.",
      videoUrl: ""
    },
    {
      profileUrl: "assets/us.png",
      review: "Mise has changed the game in terms of simplicity and certainly been a lifesaver for expat living.",
      videoUrl: ""
    },
  ]
  reviewsLength = this.reviews.length
  reviewsWidth = this.reviews.length
  previousReviewCount = 0;
  previousReviewTranslateX = 0;

  constructor(public breakpointObserver: BreakpointObserver, private scrollbar: ScrollbarService) { }
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.reviewsWidth = 400
        } else {
          this.reviewsWidth = 288;
        }
      });
  }
  toggleShowMenu() {
    this.showMenu = !this.showMenu
    this.scrollbar.getScrollbar()?.updatePluginOptions('modal', { open: this.showMenu })
  }
  calculateAmount() {
    if (this.senderAmount >= 5000) {
      this.senderErrorMessage = ""
      this.totalAmount = this.senderAmount - this.totalFees;
      this.recipientAmount = (this.totalAmount / this.recipientCurrencyRate).toFixed(2)
    } else {
      this.senderErrorMessage = "Minimum amount required is 5000"
      this.showErrorMessage = true
    }
  }
  nextReview() {
    this.previousReviewCount += 1
    this.previousReviewTranslateX += this.reviewsWidth + 8;

  }
  previousReview() {
    this.previousReviewCount -= 1
    this.previousReviewTranslateX -= this.reviewsWidth + 8;

  }

}
