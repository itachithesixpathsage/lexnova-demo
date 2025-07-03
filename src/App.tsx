import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <PracticeAreas />
      <Attorneys />
      <Testimonials />
      <News />
      <Contact />
    </Layout>
  );
}

export default App;