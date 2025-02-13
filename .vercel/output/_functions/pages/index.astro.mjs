import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_C4v43ugf.mjs';
import 'kleur/colors';
import { d as $$LinkedIn, b as $$Badge, c as $$SocialPill, a as $$SectionContainer, $ as $$Layout } from '../chunks/Layout_C3gt0wGN.mjs';
import { g as $$Mail, c as $$AstroIcon, b as $$Tailwind, a as $$NextJS, $ as $$ExperienceItem, h as $$TitleSection, i as $$Briefcase, d as $$LinkButton, e as $$GitHub, f as $$Link, j as $$Code, k as $$ProfileCheck } from '../chunks/TitleSection_DYUyh4kd.mjs';
import 'clsx';
import { createBucketClient } from '@cosmicjs/sdk';
export { renderers } from '../renderers.mjs';

const $$Astro$7 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$StoryBlok = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$StoryBlok;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 302" xmlns="http://www.w3.org/2000/svg" width="256" height="302" preserveAspectRatio="xMidYMid"><path fill="#0AB3AF" d="m244.495 0-.274.292c7.15 0 11.524 5.54 11.768 12.32l.011.6v230.552c0 7.12-4.156 11.473-10.852 11.73l-.635.013H89.558l-42.423 45.82v-46.112H12.966c-6.868 0-12.619-4.146-12.95-10.844L0 243.755V12.921C0 6.067 5.567.327 12.648.013l.61-.013h231.237Zm-78.93 46.989H47.135v164.47H151.43c7.954 0 15.615-1.47 22.682-3.233 6.605-1.364 12.43-4.278 17.729-7.519l1.127-.699a35.547 35.547 0 0 0 12.08-11.94l.585-.99h-.302c2.94-5.277 4.42-11.45 4.42-18.792 0-11.45-2.657-20.563-7.962-27.612-5.589-6.748-12.957-11.45-22.38-14.09a36.78 36.78 0 0 0 17.668-15.86c3.835-7.05 5.899-14.39 5.899-22.024a43.966 43.966 0 0 0-10.017-28.49c-3.242-3.825-7.369-7.049-11.78-9.404-4.405-2.463-9.058-3.654-14.447-3.801l-1.167-.016Zm-16.929 91.923c3.406 0 5.963 1.662 8.237 4.447a16.418 16.418 0 0 1 3.122 9.998c0 4.164-1.424 7.497-3.689 9.725-2.374 2.06-5.236 3.404-8.36 3.586l-.725.02H89.604v-27.776h59.032Zm-4.82-55.563c2.709.026 5.322 1.01 7.377 2.776 1.99 1.945 3.123 5.004 3.123 9.167 0 4.459-1.01 7.932-3.276 9.704l-.413.295c-2.099 1.542-4.68 2.844-7.291 3.035l-.653.024H89.595V83.349h54.22Z"></path></svg>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/icons/StoryBlok.astro", void 0);

const socialIcons = {
  mail: $$Mail,
  linkedin: $$LinkedIn
};
const TAGS = {
  next: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: $$NextJS
  },
  taildwind: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: $$Tailwind
  },
  astro: {
    name: "Astro",
    class: "bg-[#241504] text-white",
    icon: $$AstroIcon
  },
  storyblok: {
    name: "Storyblok",
    class: "bg-[#f8f8f8] text-black",
    icon: $$StoryBlok
  }
};

const $$Astro$6 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.props;
  const { image_hero, linkedin_url, linkedin_text, social_pill, info, title } = hero;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16"${addAttribute(image_hero.imgix_url, "src")}${addAttribute(image_hero.alt_text, "alt")}> <a${addAttribute(linkedin_url, "href")} target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`${linkedin_text}` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white"> ${title} </h1> <div class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">${unescapeHTML(info)}</div> <nav class="flex flex-wrap gap-4 mt-8"> ${social_pill.map((social) => {
    const IconComponent = socialIcons[social.icon.value] || $$Mail;
    return renderTemplate`${renderComponent($$result, "SocialPill", $$SocialPill, { "href": social.url }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconComponent", IconComponent, { "class": "size-4" })} ${social.text}` })}`;
  })} </nav> </div>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/Hero.astro", void 0);

const cosmic = createBucketClient({
  bucketSlug: "test-production-313769a0-e908-11ef-bc93-751434e46c53",
  readKey: "eqVWqPbOg4W5FNyQS3egWxKwihpLKu4cyr3b6NeHXvkqf9XjYE"
});
async function getDataBySlug(slug) {
  const data = await cosmic.objects.findOne({
    type: "portfolio",
    slug
  }).props("title,slug,metadata,created_at").depth(2).options({
    media: {
      props: "alt_text,width,height"
    }
  });
  return data.object;
}
async function getProjects() {
  const data = await cosmic.objects.find({
    type: "projects"
  }).props("slug,title,metadata,type").depth(1).options({
    media: {
      props: "alt_text,width,height"
    }
  });
  return data.objects;
}

const $$Astro$5 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Experience;
  const { experiences } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${experiences.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/Experience.astro", void 0);

const $$Astro$4 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$ExperienceSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExperienceSection;
  const { title, experience } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitleSection", $$TitleSection, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-8" })} ${title}` })} ${renderComponent($$result2, "Experience", $$Experience, { "experiences": experience })} ` })}`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/ExperienceSection.astro", void 0);

const $$Astro$3 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  const { list_projects } = Astro2.props;
  const data = list_projects.map(({ metadata }) => {
    const dataTag = metadata.tags.map(({ tech }) => {
      return TAGS[tech.key];
    });
    return { ...metadata, tags: dataTag };
  });
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${data.map(({ title, description, link, github, image, tags }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img${addAttribute(image.alt_text, "alt")} class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image.url, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400"> ${description} </div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/Projects.astro", void 0);

const $$Astro$2 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$ProjectsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectsSection;
  const { title, list_projects } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitleSection", $$TitleSection, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })} ${title}` })} ${renderComponent($$result2, "Projects", $$Projects, { "list_projects": list_projects })} ` })}`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/ProjectsSection.astro", void 0);

const $$Astro$1 = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const { content, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">${unescapeHTML(content)}</div> <img width="200" height="200"${addAttribute(image.url, "src")}${addAttribute(image.alt_text, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20" style="object-position: 50% 50%"> </article> <!-- FRASES PROHIBIDAS EN VUESTRO PORTFOLIO

<p>
  Mi sueño es encontrar mi primer empleo en el mundo de la programación. Una empresa donde pueda seguir aprendiendo. ❌
</p>

<p>
  ❌ Apasionado de la programación desde chekitito. Me encantan los ordenadores y crear páginas web buenas y rápidas con la última tecnología.
</p>

<p>
  Trabajo bien en equipo. Siempre estoy aprendiendo cosas nuevas.
</p>

-------------------------------------

--------------------------------------

<p>
  ¡Soy Leo! Estudié Derecho Empresarial y, tras años ejerciendo, me pasé al mundo de la Programación. Desde entonces disfruto creando experiencias web para los usuarios.
</p>

<p>
  Entre mis éxitos destaco que durante el Grado Superior, ayudé a mis compañeros a aprender sobre TDD. Me encanta el testing, creo en su importancia, y me gusta compartir mi conocimiento sobre ello.
</p>

<p>
  Cuento con experiencia desarrollando aplicaciones móviles, y he creado una iniciativa llamada X para mezclar mis dos pasiones: la programación y el derecho. Ayudando a la sociedad a acceso a una defensa justa.
</p>

---------------------------------------

<p>Me llamo Sara, tengo 25 años y soy de Santiago, Chile 🇨🇱. Terminé mis estudios como Desarrolladora Web. Me encanta enfocarme en la parte del rendimiento, para ofrecer la mejora experiencia al usuario.</p>

<p>
  Colaboro en la organización del MeetUp local BeerJS donde reunimos a desarrolladores de Santiago para compartir conocimiento y experiencias. El año 2023 hicimos un total de 25 charlas con más de 2000 asistentes.
</p>

<p>
  Además de participar activamente en la comunidad, he participado en la Hackathon de Midudev quedando en 3er puesto con mi proyecto _Chatty_, donde usando IA podías interactuar con un PDF. ¡Échale un vistazo!
</p>

-->`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/AboutMe.astro", void 0);

const $$Astro = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { title, content, image } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitleSection", $$TitleSection, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })} ${title}` })} ${renderComponent($$result2, "AboutMe", $$AboutMe, { "content": content, "image": image })} ` })}`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/componetCosmic/AboutSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getDataBySlug("portfolio");
  const projectsList = await getProjects();
  const projects = data.metadata.projects;
  const heroData = data.metadata.hero;
  const experience = data.metadata.experience;
  const aboutme = data.metadata.about_me;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de David - Desarrollador y Programador Web", "description": "Contrata a midudev para crear tu aplicaci\xF3n web, m\xF3vil o de escritorio. Desarrollador Web y Gamer. Arquitectura y c\xF3digo limpio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "hero": heroData })} ` })} </main> <div class="space-y-24 px-4"> ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, { "title": experience.title, "experience": experience.list })} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, { "title": projects.title, "list_projects": projectsList })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { "title": aboutme.title, "content": aboutme.content, "image": aboutme.image })} </div> ` })}`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/pages/index.astro", void 0);

const $$file = "/home/asus-fedora/my_apps/astro/porfolio.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
