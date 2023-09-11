"use client"

import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("A propos");

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <SectionHeading>A propos de moi</SectionHeading>
        <div className="items-center justify-center py-2">
          <h5 className="my-3 font-medium text-gray-700 dark:text-white/75">Bonjour et bienvenue sur mon portfolio !</h5>
          <h5 className="my-3 font-medium text-gray-700 dark:text-white/75">Après avoir obtenu un diplôme en commerce, j'ai décidé de poursuivre ma passion pour la programmation. Je me suis inscrit à <strong>l'institut Paul Hankar</strong> à Bruxelles et j'ai appris le développement web front-end, j'ai acquis des connaissances et de nombreuses compétences grâce à des projets réalisés dans différents langages <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>PHP</strong> et <strong>MySQL</strong> ainsi que la librairie <strong>React js</strong>. Ma partie préférée de la programmation est l'aspect résolution de problèmes. J'aime le sentiment de trouver enfin une solution à un problème. Me focalisant a codé avec React, Next.js, Node.js et MongoDB. Je suis aussi familier avec TypeScript. Je cherche toujours à apprendre de nouvelles technologies. Je suis actuellement à la recherche d'un poste à temps plein en tant que développeur web</h5>
          <h5 className="my-3 font-medium text-gray-700 dark:text-white/75">Vous verrez dans ce portfolio, mes compétences, mon parcours et tous les projets que j'ai pu réaliser.</h5>
        </div>
    </motion.section>
  )
}
