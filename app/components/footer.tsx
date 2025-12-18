"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AnimatedCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const size = 55;
    const gap = 25;
    const total = size + gap;

    let cols = Math.ceil(canvas.width / total);
    let rows = Math.ceil(canvas.height / total);

    interface Box {
      x: number;
      y: number;
      opacity: number;
      speed: number;
      direction: 1 | -1;
    }

    let boxes: Box[] = [];

    const createBoxes = () => {
      boxes = [];
      cols = Math.ceil(canvas.width / total);
      rows = Math.ceil(canvas.height / total);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          boxes.push({
            x: i * total,
            y: j * total,
            opacity: Math.random() * 0.15,
            speed: 0.002 + Math.random() * 0.004,
            direction: Math.random() > 0.5 ? 1 : -1,
          });
        }
      }
    };

    createBoxes();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const box of boxes) {
        box.opacity += box.speed * box.direction;

        if (box.opacity >= 0.18) box.direction = -1;
        if (box.opacity <= 0) {
          box.opacity = 0;
          box.direction = 1;
          box.speed = 0.002 + Math.random() * 0.004;
        }

        if (box.opacity > 0) {
          ctx.fillStyle = `rgba(30, 30, 30, ${box.opacity})`;
          ctx.fillRect(box.x, box.y, size, size);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ borderRadius: "inherit" }}
    />
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-900 text-white rounded-t-xl md:rounded-none overflow-hidden" style={{ fontSize: "16px" }}>
      {/* Animated Canvas Background */}
      <div className="absolute inset-0">
        <AnimatedCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="w-40">
              <Image
                width={252}
                height={153}
                src="https://framerusercontent.com/images/AbzZXWoIidWfAiHiTZRt3whmbI.png?width=252&height=153"
                alt="Globex International"
                className="w-full h-auto"
              />
            </div>
            <p className=" text-zinc-200 leading-relaxed">
              A global commodity trading company specializing in petroleum, construction materials, energy, fertilizers, and agro commodities. Trusted since 2007.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-white " />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white " />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-white " />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="text-white " />
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p>
                <a href="tel:+971-42765747" className=" text-zinc-200 hover:text-white">+971-42765747</a>
              </p>
              <p>
                <a href="mailto:marketingglobal@globexinternational.in" className="text-zinc-200 hover:text-white">marketingglobal@globexinternational.in</a>
              </p>
              <p className=" text-zinc-200 leading-relaxed">
                611, Goldcrest Executive Tower,<br />
                Cluster C, JLT, Dubai.
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <div className="space-y-3 text-zinc-200 hover:text-white">
              <a
                href="/"
                className="block transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/products"
                className="block transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="/about"
                className="block transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-6">Legal</h3>
            <div className="space-y-3 text-zinc-200 hover:text-white">
              <a
                href="#"
                className="block transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-2  text-zinc-200">
            <span> &copy; {new Date().getFullYear()} Globex. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;