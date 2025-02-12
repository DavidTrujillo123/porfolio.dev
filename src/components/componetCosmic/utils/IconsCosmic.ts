import AstroIcon from "@/components/icons/AstroIcon.astro";
import LinkedInIcon from "@/components/icons/LinkedIn.astro";
import MailIcon from "@/components/icons/Mail.astro";
import NextJS from "@/components/icons/NextJS.astro";
import StoryBlok from "@/components/icons/StoryBlok.astro";
import Tailwind from "@/components/icons/Tailwind.astro";

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
  }
};