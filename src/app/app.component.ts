import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

interface ReviewModel {
  profileUrl: string;
  review: string;
  videoUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-mise';
  @Input() senderAmount: number = 10000;
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
  constructor(private reviewWrapper: ElementRef<HTMLDivElement>) { }
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
  ngAfterViewInit() {
    this.reviewsWidth = this.reviewWrapper.nativeElement.offsetWidth / (this.reviewsLength - 1)
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
    this.previousReviewTranslateX += this.reviewsWidth - 32;

  }
  previousReview() {
    this.previousReviewCount -= 1
    this.previousReviewTranslateX -= this.reviewsWidth -32;

  }

}
