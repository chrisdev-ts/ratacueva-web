"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ReviewCard } from "../atoms"
import { Review } from "@/libs/userReviews"

interface ReviewsCarouselProps {
  reviews: Review[]
}

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <div className="relative h-56 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <ReviewCard 
            review={reviews[currentIndex]} 
            index={currentIndex} 
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsCarousel 