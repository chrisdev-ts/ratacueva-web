"use client"

import Button from "@/components/atoms/Button"
import { 
  MusicalNoteIcon, 
  ChatBubbleLeftRightIcon,
  PlayCircleIcon,
  PhotoIcon,
  HeartIcon
} from "@heroicons/react/24/outline"

const SocialMediaButtons = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: HeartIcon,
      url: "https://facebook.com"
    },
    {
      name: "Instagram",
      icon: PhotoIcon,
      url: "https://instagram.com"
    },
    {
      name: "TikTok",
      icon: MusicalNoteIcon,
      url: "https://tiktok.com"
    },
    {
      name: "X",
      icon: ChatBubbleLeftRightIcon,
      url: "https://x.com"
    },
    {
      name: "YouTube",
      icon: PlayCircleIcon,
      url: "https://youtube.com"
    }
  ]

  return (
    <div className="flex flex-wrap gap-4 lg:gap-6">
      {socialPlatforms.map((platform) => {
        const IconComponent = platform.icon
        return (
          <Button
            key={platform.name}
            onClick={() => window.open(platform.url, '_blank')}
          >
            <IconComponent className="w-5 h-5 text-white" />
            <span className="text-white text-base font-bold">{platform.name}</span>
          </Button>
        )
      })}
    </div>
  )
}

export default SocialMediaButtons 