import React from 'react';
import IkiAboutsu from '../components/ikiaboutsu';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import KontakBcok from '../components/kontakbcok';
import Homeanjrot from '../components/homeanjrot';

export default function Home() {
  return (
    <div>
      <Homeanjrot />
      <IkiAboutsu />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <KontakBcok />
    </div>
  );
}
