import { Review } from "@/types/review";
import React from "react";
import ReviewItem from "../molecules/ReviewItem";

function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.REVIEW_ID} {...review} />
      ))}
    </div>
  );
}

export default ReviewList;
