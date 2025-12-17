import AstroIcon from "@/components/icons/AstroIcon.astro";
import Java from "@/components/icons/Java.astro";
import JavaScript from "@/components/icons/JavaScript.astro";
import Laravel from "@/components/icons/Laravel.astro";
import LinkedInIcon from "@/components/icons/LinkedIn.astro";
import MailIcon from "@/components/icons/Mail.astro";
import NextJS from "@/components/icons/NextJS.astro";
import StoryBlok from "@/components/icons/StoryBlok.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import Nestjs from "@/components/icons/Nestjs.astro";
import Flutter from "@/components/icons/Flutter.astro";
import React from "@/components/icons/React.astro";


export const socialIcons:any = {
  mail: MailIcon,
  linkedin: LinkedInIcon,
};

export const TAGS: any = {
  next: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  taildwind: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  astro: {
    name: "Astro",
    class: "bg-[#241504] text-white",
    icon: AstroIcon
  },
  storyblok:{
    name: "Storyblok",
    class: "bg-[#f8f8f8] text-black",
    icon: StoryBlok
  },
  java: {
    name: "Java",
    class: "bg-slate-300 text-black",
    icon: Java
  },
  js: {
    name: "JavaScript",
    class: "bg-yellow-100 text-black",
    icon: JavaScript
  },
  laravel: {
    name: "Laravel",
    class: "bg-gray-700 text-white",
    icon: Laravel
  },
  nestjs: {
    name: "Nest.js",
    class: "bg-slate-700 text-white",
    icon: Nestjs
  },
  flutter:{
    name: "Flutter",
    class: "bg-sky-950 text-white",
    icon: Flutter
  },
  react:{
    name: "React",
    class: "bg-slate-200 text-black",
    icon: React
  }
};