import React from 'react';
import Navbar from './components/Navbar';
import IntroHero from './components/IntroHero';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Team from './components/Team';
import Office from './components/Office';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import CreateJob from './pages/CreateJob';
import JobDetails from './pages/JobDetails';

function Home() {
  return (
    <>
      <IntroHero />
      <main className="space-y-24">
        <Hero />
        <AboutUs />
        <Stats />
        <Team />
        <Office />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      {/* Wrapper div with top padding to account for fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App; 