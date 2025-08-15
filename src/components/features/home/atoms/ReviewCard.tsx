"use client"

import { motion } from "framer-motion"
import { StarIcon } from "@heroicons/react/24/outline"

interface ReviewCardProps {
  review: {
    id: number
    name: string
    platform: string
    stars: number
    text: string
  }
  index: number
}

const ReviewCard = ({ review, index }: ReviewCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.2,
      ease: "easeOut"
    }}
    className="h-56 bg-gray hover:bg-dark transition-colors rounded-lg cursor-pointer group p-6">
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {[...Array(review.stars)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-yellow-500 fill-current" />
          ))}
        </div>
        
        {/* Review Text */}
        <p className="text-white text-sm leading-relaxed line-clamp-4">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      
      {/* User Info */}
      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
          <span className="text-primary font-bold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-medium text-sm">{review.name}</p>
          <p className="text-placeholder text-xs">{review.platform}</p>
        </div>
      </div>
    </div>
  </motion.div>
)

export default ReviewCard 