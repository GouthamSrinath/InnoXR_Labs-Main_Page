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
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
          {/* Placeholder Video Content */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 flex items-center justify-center relative">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse" />
            
            {/* Hologram Effect */}
            <div className="relative z-10 text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center animate-spin-slow">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-light text-white">HoloInteract Demo</h3>
                <p className="text-blue-200 text-sm">AI-Powered Holographic Interaction</p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>
          </div>
          
          {/* Click to Play Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}