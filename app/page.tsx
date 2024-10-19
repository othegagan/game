import About from '@/components/About';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Gameplay from '@/components/Gameplay';
import Hero from '@/components/Hero';
import Roadmap from '@/components/Roadmap';
import Tokenomics from '@/components/Tokenomics';

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Features />
            <Gameplay />
            <Tokenomics />
            <Roadmap />
            <Contact />
            <Footer />
        </div>
    );
}
