"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ReviewCard } from "../atoms"
import { Review } from "../../../../../lib/userReviews"

interface InfiniteReviewsCarouselProps {
  reviews: Review[]
}

const InfiniteReviewsCarousel = ({ reviews }: InfiniteReviewsCarouselProps) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => prev + 1)
    }, 50) // Smooth continuous movement

    return () => clearInterval(interval)
  }, [])

  // Create duplicated reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]

  return (
    <div className="relative h-96 overflow-hidden">
      <motion.div
        animate={{ y: -scrollY }}
        transition={{ duration: 0.05, ease: "linear" }}
        className="space-y-6"
        style={{
          transform: `translateY(${-scrollY}px)`,
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div key={`${review.id}-${index}`} className="h-56">
            <ReviewCard 
              review={review} 
              index={index} 
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteReviewsCarousel 