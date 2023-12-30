import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaServer, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiRedux, SiVisualstudio, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillBootstrapFill, BsFillHouseDoorFill } from 'react-icons/bs';
import emploi from "@/public/emploi.png";
import blog from "@/public/blog.png";
import blog2 from "@/public/blog2.png";
import ecomnextjs from "@/public/ecommnextjs.png";
import ecom from "@/public/ecom.png";
import socialN from "@/public/socialN.png";
import blood from "@/public/blood.png";
import rent from "@/public/louer.png";
import construct from "@/public/construct.png";
import portfolio from "@/public/portfolio.png";

export const links = [
  {
    name: React.createElement(BsFillHouseDoorFill),
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Formations",
    hash: "#formation",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },  
  {
    name: "Potfolio",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const formation = [
  {
    title: "Développeur web",
    location: "Institut Paul Hankar, Bruxelles",
    description:
      "Apprentissage des principaux langages du Web (HTML, CSS, Javascript et PHP) avec CMS (Wordpress)",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Maintenance informatique",
    location: "EPFC, Bruxelles",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2016",
  },
  {
    title: "Management des Unités Commerciales",
    location: "Pigier, Tizi Ouzou",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2010",
  },
  {
    title: "Bachelier en commerce international",
    location: "Sigma, Tizi Ouzou",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2005 - 2008",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance developer",
    location: "Bruxelles",
    description:
      "En charge de projets web, analyse des besoins, la conception du site, la phase de développement, les tests et la mise en production, le support technique et la veille technologique.",
    icon: React.createElement(CgWorkAlt),
    date: "Juin 2022 - aujourd'hui",
  },
  {
    title: "Front-end web developer",
    location: "SARL Palmeraie, Paris",
    description:
      "Refonte d'un site web, développement front-end HTML, CSS et Javascript et développement back- end PHPet MySQL",
    icon: React.createElement(CgWorkAlt),
    date: "Novembre 2019 - mai 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Blog",
    description:
      "Blog publication d'articles actualité, divertissement, voyage, bien-être, sport et lifestyle. Développé en MERN stack",
    tags: [React.createElement(FaReact), React.createElement(SiTypescript), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress), React.createElement(BsFillBootstrapFill)],
    url:"https://github.com/Cherif436",
    imageUrl: blog2,
  },
  {
    title: "E-commerce",
    description:
      "Développement d'un site d'e-commerce vente de vêtements.",
    tags: [React.createElement(SiNextdotjs), React.createElement(FaNodeJs), React.createElement(SiExpress), React.createElement(SiMongodb), React.createElement(SiTailwindcss)],
    url:"https://github.com/Cherif436/projet_ecommerce_nextjs",
    imageUrl: ecomnextjs,
  },
  {
    title: "Réseau social",
    description:
      "Réalisation d'un réseau social personnel développé en MERN stack.",
    tags: [React.createElement(FaReact), React.createElement(SiTypescript), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: socialN,
  },
  {
    title: "Application web",
    description:
      "L'application vise à fournir une expérience utilisateur transparente et une gestion des stocks de sang pour les banques de sang et les donneurs.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: blood,
  },
  {
    title: "Portail emploi",
    description:
      "Réalisation d'un site plateforme de recrutement (projet épreuve intégrée).",
    tags: [React.createElement(FaPhp), React.createElement(SiMysql), React.createElement(BsFillBootstrapFill)],
    url:"https://github.com/Cherif436",
    imageUrl: emploi,
  },
  {
    title: "E-commerce",
    description:
      "Développement d'un site d'e-commerce d'appareils électroniques.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: ecom,
  },
  {
    title: "Blog",
    description:
      "Réalisation d'un blog à publier des articles personnels à l'aide de react, node, express et mongo.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: blog,
  },
  {
    title: "Site vitrine",
    description:
      "Création d'un site responsive pour une entreprise de construction",
    tags: [React.createElement(SiNextdotjs), React.createElement(SiTailwindcss)],
    url:"https://cataline.vercel.app/",
    imageUrl: construct,
  },
  {
    title: "Application web",
    description:
      "Réalisation d'un site pour une agence de location de voiture.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: rent,
  },
  {
    title: "Portfolio",
    description:
      "Portfolio version 1",
    tags: [React.createElement(SiNextdotjs), React.createElement(SiTypescript), React.createElement(SiTailwindcss)],
    url:"https://cherif.vercel.app/",
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",  
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "SQL",
  "Redux",
  "Express",
] as const;

export const languages = [
  {
    name: 'HTML',
    level: '84%',
    Icon: AiFillHtml5
  },
  {
    name: 'CSS',
    level: '82%',
    Icon: FaCss3Alt
  },
  {
    name: 'Bootstrap',
    level: '85%',
    Icon: BsFillBootstrapFill
  },
  {
    name: 'Tailwind',
    level: '80%',
    Icon: SiTailwindcss
  },
  {
    name: 'Javascipt',
    level: '75%',
    Icon: FaJsSquare
  },
  {
    name: 'React js',
    level: '78%',
    Icon: FaReact
  },
  {
    name: 'Redux',
    level: '61%',
    Icon: SiRedux
  },
  {
    name: 'Next js',
    level: '73%',
    Icon: SiNextdotjs
  },
  {
    name: 'Typescript',
    level: '65%',
    Icon: SiTypescript
  },
  {
    name: 'Node js / express',
    level: '74%',
    Icon: FaNodeJs
  },  
] as const;

export const tools = [
  {
    Icon: SiVisualstudio,
    name: 'VS Code',
    level: '75%',
  },
  {
    Icon: AiFillGithub,
    name: 'Git',
    level: '61%',
  }
] as const;

export const cms = [
  {
    Icon: FaWordpress,
    name: 'Wordpress',
    level: '45%',
  }
] as const;

export const database = [
  {
    Icon: SiMysql,
    name: 'MySQL',
    level: '67%',
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    level: '75%',
  }
] as const;
