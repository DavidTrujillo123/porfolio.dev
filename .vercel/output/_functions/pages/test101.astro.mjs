import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as createAstro } from '../chunks/astro/server_C4v43ugf.mjs';
import 'kleur/colors';
import { b as $$Badge, c as $$SocialPill, d as $$LinkedIn, $ as $$Layout, a as $$SectionContainer } from '../chunks/Layout_C3gt0wGN.mjs';
import 'clsx';
import { $ as $$ExperienceItem, a as $$NextJS, b as $$Tailwind, c as $$AstroIcon, d as $$LinkButton, e as $$GitHub, f as $$Link, g as $$Mail, h as $$TitleSection, i as $$Briefcase, j as $$Code, k as $$ProfileCheck } from '../chunks/TitleSection_DYUyh4kd.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Miguel \xC1ngel";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la
      programación con un Amstrad, tenía 10 años. Actualmente estoy <strong>liderando equipos de desarrollo en multinacionales</strong>.
</p> <p>
Algunos de mis éxitos incluyen <strong>colaborar con Mozilla para el desarrollo de las primeras apps en su
        sistema FirefoxOS</strong>. Aunque hoy está desaparecido fue un gran avance en el mundo del
      desarrollo web.
</p> <p>
Como creador de contenido, <strong>cuento con el canal de habla hispana más visto del mundo en la
        categoría de <em class="italic">Software & Game Development</em> en Twitch</strong>. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el
      acceso a contenido de calidad.
</p> </div> <img width="200" height="200" src="/me.png"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article> <!-- FRASES PROHIBIDAS EN VUESTRO PORTFOLIO

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
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/AboutMe.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCE = [
    {
      date: "Actualmente...",
      title: "Creador de Contenido",
      company: "Twitch",
      description: "Divulgo sobre programaci\xF3n y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
      link: "https://twitch.tv/midudev"
    },
    {
      date: "Septiembre 2022",
      title: "Principal Frontend Engineer",
      company: "Adevinta Spain",
      description: "Responsable de la plataforma, componentes y utilidades para la creaci\xF3n y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantaci\xF3n de medidas de integraci\xF3n continua y despliegue con A/B testing en m\xE1s de 15 equipos."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/Experience.astro", void 0);

const $$Astro = createAstro("https://porfolio-dev-drab.vercel.app/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJS
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    ASTROICON: {
      name: "Astro",
      class: "bg-[#003159] text-white",
      icon: $$AstroIcon
    }
  };
  const PROJECTS = [
    {
      title: "SVGL - A beautiful library with SVG logos",
      description: "Biblioteca de logos SVG de las marcas m\xE1s populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
      link: "https://svgl.vercel.app/",
      github: "https://github.com/pheralb/svgl",
      image: "/projects/svgl.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND]
    },
    {
      title: "AdventJS - Retos de programaci\xF3n con JavaScript y TypeScript",
      description: "Plataforma gratuita con retos de programaci\xF3n. M\xE1s de 1 mill\xF3n de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/adventjs.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.ASTROICON]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/Projects.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Miguel \xC1ngel";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="/midudev.webp"${addAttribute(personalImageAlt, "alt")}> <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hey, soy midudev
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
+15 años de experiencia. <strong>Ingeniero de Software y Creador de Contenido sobre Programación</strong> de Barcelona, España 🇪🇸. Especializado en el desarrollo de aplicaciones web
    únicas.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:miduga@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/midudev" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/components/Hero.astro", void 0);

const $$Test101 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de midudev - Desarrollador y Programador Web con 15 a\xF1os de experiencia", "description": "Contrata a midudev para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones \xFAnicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia laboral
` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
` })} ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
` })} ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "/home/asus-fedora/my_apps/astro/porfolio.dev/src/pages/test101.astro", void 0);

const $$file = "/home/asus-fedora/my_apps/astro/porfolio.dev/src/pages/test101.astro";
const $$url = "/test101";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test101,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
