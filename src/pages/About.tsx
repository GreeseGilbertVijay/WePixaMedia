import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Index = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const [glow, setGlow] = useState(false);
  const [freezeLine, setFreezeLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = Math.min(scrollY / maxHeight, 1);
      const imageSection = document.querySelector('.image') as HTMLElement;

      // Calculate the line height only when not frozen
      if (!freezeLine) {
        setLineHeight(percentage * 100);
      }

      if (imageSection) {
        const rect = imageSection.getBoundingClientRect();

        // Glow effect trigger
        if (rect.top < window.innerHeight * 0.55 && rect.bottom > 0) {
          setGlow(true);
        } else {
          setGlow(false);
        }

        // Freeze line when reaching image
        if (rect.top <= window.innerHeight * 0.6) {
          setFreezeLine(true);
        }

        // If user scrolls back up, resume line movement
        if (rect.top > window.innerHeight * 0.8) {
          setFreezeLine(false);
        }
      }

      // Reset to top when scrollY = 0
      if (scrollY === 0) {
        setLineHeight(0);
        setFreezeLine(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [freezeLine]);

  return (
    <div className="min-h-screen relative">
      <style>{`
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.4;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        /* Glowing vertical line */
        .vertical-line {
          position: fixed;
          top: 0;
          right: 30%;
          transform: translateX(-50%);
          width: 10px;
          height: 0;
          background: linear-gradient(180deg, rgba(0,120,255,0.9), rgba(0,120,255,0.2));
          box-shadow: 0 0 40px 15px rgba(0,120,255,0.5);
          filter: blur(2px);
          border-radius: 10px;
          animation: smokeFlow 4s ease-in-out infinite;
          z-index: -10;
          transition: height 0.4s ease-out;
        }

        .vertical-line.frozen {
          animation: none;
          box-shadow: 0 0 60px 25px rgba(0,120,255,0.6);
        }

        @keyframes smokeFlow {
          0%, 100% {
            box-shadow: 0 0 40px 15px rgba(0,120,255,0.5);
          }
          50% {
            box-shadow: 0 0 80px 30px rgba(0,120,255,0.9);
          }
        }

        .image {
          transition: box-shadow 0.6s ease, filter 0.8s ease, background 0.6s ease;
          width: 100%;
          height: 400px;
          background: url("../lovable-uploads/rectangle-image.png") center/cover no-repeat;
          border-radius: 20px;
        }

        .image.glow {
          box-shadow: 20px -20px 20px rgba(0, 120, 255, 0.7);
          filter: brightness(1.3) saturate(1.5);
        }
      `}</style>

      <Navbar />

      {/* Glowing Line */}
      <div
        className={`vertical-line ${freezeLine ? 'frozen' : ''}`}
        style={{
          height: `${lineHeight}vh`,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative rounded-3xl min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="hero-video"
          src="/lovable-uploads/dragonfly.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay"></div>

        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="xl:text-7xl text-white lg:text-6xl md:text-5xl text-4xl font-bold mb-8 leading-tight">
                Creativity Drives <br /> Digital Growth
              </h1>
              <p className="text-xl md:text-xl mb-8 text-slate-300 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empowering individuals to regain financial confidence and rebuild their future.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-colors duration-200"
              >
                Get A Quick Connect Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className={`image mt-24 flex justify-center ${glow ? 'glow' : ''}`}>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
