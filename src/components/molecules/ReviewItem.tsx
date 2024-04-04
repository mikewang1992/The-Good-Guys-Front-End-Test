import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Review } from "@/types/review";

function ReviewItem(review: Review) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>
          {review.REVIEW_TITLE ? review.REVIEW_TITLE : "--"}
        </CardTitle>
        {`${review.RATING} stars`}
        <CardDescription>{`Comment:`}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{review.REVIEW_TEXT ? review.REVIEW_TEXT : "--"}</p>
      </CardContent>
      <CardFooter>
        <div className="text-right w-full">— {review.CUSTOMER_NAME}</div>
      </CardFooter>
    </Card>
  );
}

export default ReviewItem;
