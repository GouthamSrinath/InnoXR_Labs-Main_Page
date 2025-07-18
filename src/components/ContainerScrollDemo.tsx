"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HoloInteractScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl sm:text-5xl font-extralight text-black dark:text-white mb-6 tracking-tight">
              See HoloInteract in <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mt-1 leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Watch how our AI-powered holographic technology transforms presentations and education
            </p>
          </>
        }
      >
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=J5lGQjKzX8tGqJ5v&autoplay=0&mute=1&controls=1&showinfo=0&rel=0"
            title="HoloInteract Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-2xl"
            style={{
              minHeight: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}