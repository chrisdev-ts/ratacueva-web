"use client";

import Image from "next/image";

// Componente Button simple ya que no tenemos acceso al componente personalizado
const Button = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-3 py-3 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 text-center min-h-[60px] w-full ${className}`}
  >
    {children}
  </button>
);

const SocialMediaButtons = () => {
  // Redes sociales con imágenes públicas
  const socialPlatforms = [
    {
      name: "Facebook",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      url: "https://instagram.com",
    },
    {
      name: "TikTok",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
      url: "https://tiktok.com",
    },
    {
      name: "X (Twitter)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/X_logo_black.svg",
      url: "https://x.com",
    },
    {
      name: "YouTube",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
      url: "https://youtube.com",
    },
    {
      name: "Discord",
      image:
        "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg",
      url: "https://discord.com",
    },
    {
      name: "Telegram",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
      url: "https://telegram.org",
    },
    {
      name: "LinkedIn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      url: "https://linkedin.com",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4 max-w-4xl mx-auto">
      {socialPlatforms.map((platform) => {
        return (
          <Button
            key={platform.name}
            onClick={() => window.open(platform.url, "_blank")}
          >
            <Image
              src={platform.image}
              alt={`${platform.name} logo`}
              className="w-6 h-6 object-contain"
              width={24}
              height={24}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="text-gray-800 text-sm font-semibold truncate">
              {platform.name}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMediaButtons;
