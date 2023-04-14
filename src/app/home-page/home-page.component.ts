import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';


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
export class HomePageComponent {
  senderAmount: number = 10000;
  senderCurrency: string = "INR"
  recipientCurrency: string = "USD"
  recipientCurrencyRate: number = 82.0102
  bankTransferFees: number = 0;
  ourFees: number = 329.94;
  totalFees: number = this.bankTransferFees + this.ourFees;
  totalAmount: number = this.senderAmount - this.totalFees;
  recipientAmount: string = (this.totalAmount / this.recipientCurrencyRate).toFixed(2)
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
  previousReviewCount: number = 0;
  previousReviewTranslateX: number = 0;

  constructor(public breakpointObserver: BreakpointObserver) {}
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