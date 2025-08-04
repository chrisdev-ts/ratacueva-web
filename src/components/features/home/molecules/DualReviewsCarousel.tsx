"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ReviewCard } from "../atoms"
import { Review } from "@/libs/userReviews"

interface DualReviewsCarouselProps {
  reviews: Review[]
}

const DualReviewsCarousel = ({ reviews }: DualReviewsCarouselProps) => {
  const [scrollY1, setScrollY1] = useState(0)
  const [scrollY2, setScrollY2] = useState(0)

  useEffect(() => {
    const interval1 = setInterval(() => {
      setScrollY1((prev) => prev + 0.5)
    }, 50)

    const interval2 = setInterval(() => {
      setScrollY2((prev) => prev + 0.8) // Slightly different speed
    }, 50)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [])

  // Split reviews into two columns with alternating distribution
  const firstColumnReviews = reviews.filter((_, index) => index % 2 === 0)
  const secondColumnReviews = reviews.filter((_, index) => index % 2 === 1)

  // Create duplicated reviews for seamless loop
  const duplicatedFirst = [...firstColumnReviews, ...firstColumnReviews, ...firstColumnReviews]
  const duplicatedSecond = [...secondColumnReviews, ...secondColumnReviews, ...secondColumnReviews]

  return (
    <div className="flex gap-6 lg:gap-9">
      {/* First Column */}
      <div className="flex-1 relative h-96 overflow-hidden">
        <motion.div
          animate={{ y: -scrollY1 }}
          transition={{ duration: 0.05, ease: "linear" }}
          className="space-y-6"
        >
          {duplicatedFirst.map((review, index) => (
            <div key={`first-${review.id}-${index}`} className="h-56">
              <ReviewCard 
                review={review} 
                index={index} 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Column */}
      <div className="flex-1 relative h-96 overflow-hidden">
        <motion.div
          animate={{ y: -scrollY2 }}
          transition={{ duration: 0.05, ease: "linear" }}
          className="space-y-6"
        >
          {duplicatedSecond.map((review, index) => (
            <div key={`second-${review.id}-${index}`} className="h-56">
              <ReviewCard 
                review={review} 
                index={index} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default DualReviewsCarousel 