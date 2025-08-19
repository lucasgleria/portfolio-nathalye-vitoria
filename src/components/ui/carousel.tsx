"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselProps {
  media: Array<{
    type: "image" | "video"
    src: string
  }>
  className?: string
}

export function Carousel({ media, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Add safety check for media array
  if (!media || media.length === 0) {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">No media available</p>
        </div>
      </div>
    )
  }

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentMedia = media[currentIndex]

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Media Display */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt={`Project media ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/20">
            <video
              src={currentMedia.src}
              className="w-full h-full object-cover"
              controls
              autoPlay={isPlaying}
            />
          </div>
        )}
        
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Video Controls */}
        {currentMedia.type === "video" && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute bottom-2 left-2 bg-black/20 hover:bg-black/40 text-white border-none"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        )}

        {/* Media Type Indicator */}
        <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
          {currentMedia.type === "video" ? "VÍDEO" : `IMAGEM ${currentIndex + 1}`}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "relative flex-shrink-0 w-20 h-12 rounded overflow-hidden border-2 transition-all",
              index === currentIndex 
                ? "border-purple-500 scale-105" 
                : "border-transparent hover:border-gray-300"
            )}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-black/20 flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
            )}
            {index === currentIndex && (
              <div className="absolute inset-0 bg-purple-500/20 border-2 border-purple-500 rounded" />
            )}
          </button>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex 
                ? "bg-purple-600 w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  )
}