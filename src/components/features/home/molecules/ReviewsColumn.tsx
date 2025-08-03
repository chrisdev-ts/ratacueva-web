"use client"

import { ReviewCard } from "../atoms"

interface Review {
  id: number
  name: string
  platform: string
  stars: number
  text: string
}

interface ReviewsColumnProps {
  reviews: Review[]
  columnIndex: number
}

const ReviewsColumn = ({ reviews, columnIndex }: ReviewsColumnProps) => (
  <div className="flex-1 space-y-6 lg:space-y-9">
    {reviews.map((review, index) => (
      <ReviewCard 
        key={review.id} 
        review={review} 
        index={columnIndex * 2 + index} />
    ))}
  </div>
)

export default ReviewsColumn 