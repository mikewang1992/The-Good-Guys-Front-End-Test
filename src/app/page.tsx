"use client";
import ReviewList from "@/components/organisms/ReviewList";
import { useEffect, useState } from "react";
import reviewsData from "../../public/data/reviews.json";
import { Review } from "@/types/review";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reviews: Review[] = reviewsData as Review[];

export default function Home() {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [loadCount, setLoadCount] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    loadReviews();
  }, [loadCount, sortOrder]);

  const loadReviews = () => {
    const sortedReviews = sortReviews(reviews, sortOrder);
    const reviewsToDisplay = sortedReviews.slice(0, loadCount * 10);
    setDisplayedReviews(reviewsToDisplay);
  };

  const sortReviews = (reviews: Review[], sortOrder: string) => {
    switch (sortOrder) {
      case "newest":
        return reviews.toSorted(
          (a, b) =>
            new Date(b.SUBMISSION_DATE).getTime() -
            new Date(a.SUBMISSION_DATE).getTime()
        );
      case "highest":
        return reviews.toSorted((a, b) => b.RATING - a.RATING);
      case "lowest":
        return reviews.toSorted((a, b) => a.RATING - b.RATING);
      default:
        return reviews;
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
      <Select defaultValue={sortOrder} onValueChange={setSortOrder}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="highest">Highest</SelectItem>
          <SelectItem value="lowest">Lowest</SelectItem>
        </SelectContent>
      </Select>
      <ReviewList reviews={displayedReviews} />
      <Button
        onClick={() => setLoadCount((count) => count + 1)}
        disabled={displayedReviews.length >= reviews.length}
      >
        More
      </Button>
    </main>
  );
}
