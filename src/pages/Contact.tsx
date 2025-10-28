import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "AUDIO_RECORDER_CLICKED") {
        console.log("🔹 Adjusting iframe height:", event.data.data);
        const iframe = document.getElementById("chatbotIframe") as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.data}`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen relative">
      <style>{`
        #chatbotIframe {
          width: 100%;
          border: none;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }

        @media (max-width: 768px) {
          #chatbotIframe {
            height: 250px;
          }
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.4; /* You can adjust this for better text visibility */
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
      `}</style>
      
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Video */}
        <video
          className="hero-video"
          src="/lovable-uploads/dragonfly.mp4" // <-- Replace with your actual video path
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark overlay for better text contrast */}
        <div className="hero-overlay"></div>

        {/* Foreground content */}
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white block mb-4 animate-slide-in-right">
                  Creativity Drives
                </span>
                 <span className="text-white block mb-4 animate-slide-in-right">
                  Digital Growth
                </span>
               
              </h1>
              <p className="text-xl md:text-xl mb-8 text-slate-300 max-w-xl leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.6s' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empowering individuals to regain financial confidence and rebuild their future.
              </p>
              <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-colors duration-200">
              Get A Quick Connect Now
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
