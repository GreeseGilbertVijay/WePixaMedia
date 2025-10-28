import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSliderOne from '../components/CardSliderOne';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <style>{`
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
        .box-1 {
          height: 300px;
          border-radius: 10px;
          padding:30px 18px;
          background-image:url("../lovable-uploads/section-box-bg.png");
        }
       .box-2 {
         height: 300px;
         border-radius: 10px;
         padding: 30px 18px;
         background-color: #192584;
         transition: all 0.3s ease;
       }

       .box-3-1 {
         height: 500px;
         border-radius: 10px;
         background-color: #192584;
         padding: 30px 18px;
         transition: all 0.3s ease;
       }
     
       .box-3-2 {
         height: 500px;
       }
     
       .box-3-3 {
         height: 500px;
         border-radius: 10px;
         padding: 30px 18px;
         background-color: #192584;
         transition: all 0.3s ease;
       }
     
       .box-2-col-1 {
         height: 200px;
         border-radius: 10px;
         padding: 30px 18px;
         transition: all 0.3s ease;
         background-image: url("../lovable-uploads/beautiful.jpg");
       }
     
       .box-2-col-2 {
         height: 300px;
         border-radius: 10px;
         padding: 30px 18px;
         background-color: #192584;
         transition: all 0.3s ease;
       }
     
       /* Hover glow effect for buttons inside .box-2, .box-3-1, and .box-3-3 */
       .box-2:hover .hover-button,
       .box-3-1:hover .hover-button,
       .box-3-3:hover .hover-button {
         box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);
       }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative rounded-3xl min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark overlay for better text contrast */}
        <div className="hero-overlay"></div>
        {/* Foreground content */}
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="xl:text-7xl text-white lg:text-6xl animate-slide-in-right md:text-5xl text-4xl font-bold mb-8 leading-tight">
                  Creativity Drives <br></br> Digital Growth
              </h1>
              <p className="text-xl md:text-xl mb-8 text-slate-300 max-w-xl leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.6s' }}>
                WePixa Media helps businesses unlock their potential with smart, creative, and impactful digital solutions.
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
      {/* Image Section */}
      <section className='image mt-2 flex justify-center'>
           <img src="../lovable-uploads/section-image.png" alt="" />
      </section>
      {/* Why Choose */}
      <section className="relative rounded-3xl min-h-auto overflow-hidden">
        {/* Foreground content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div>
            <div className="animate-fade-in">
              <h1 className="text-5xl font-medium mb-12 animate-slide-in-right leading-tight text-white">
                Why Choose <br></br>WePixaMedia
              </h1>
              {/* Box container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-white">
                <div className="box-1 flex flex-col gap-8">
                   <h4 className="text-2xl font-medium">Fresh Perspective</h4>
                   <p className="text-base font-normal">Bold ideas delivered with modern execution</p>
                </div>
                <div className="box-1 flex flex-col gap-8">
                   <h4 className="text-2xl font-medium">Digital Solutions</h4>
                   <p className="text-base font-normal">Websites, marketing campaigns, SEO, and more — all in one place.</p>
                </div>
                <div className="box-1 flex flex-col gap-8">
                   <h4 className="text-2xl font-medium">Creative Approach</h4>
                   <p className="text-base font-normal">Custom strategies tailored to your brand story.</p>
                </div>
                <div className="box-1 flex flex-col gap-8">
                   <h4 className="text-2xl font-medium">Future-Ready</h4>
                   <p className="text-base font-normal">Using the latest digital tools and best practices to keep you ahead of the competition</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Hero Section with Video Background */}
      <section className="min-h-auto flex items-center justify-center">
        <div className="max-w-6xl py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-medium mb-20 leading-tight text-white animate-slide-in-right text-center">
             Our Services Make Your<br></br>Vision Come Alive.
            </h1>
            {/* Grid container 1 */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
              {/* Grid 1 */}
              <div className="box-2 flex flex-col justify-end gap-4 group">
                <h4 className="text-2xl font-medium text-white">Website Design</h4>
                <p className="text-base font-normal text-white/90">
                  Bold ideas delivered with modern execution
                </p>
                <Link
                  to="/contact"
                  className="hover-button bg-[#232226] border-[#414045] border-t border-l border-r text-white font-medium px-5 py-3 rounded-full transition-all duration-300 w-fit group-hover:bg-white group-hover:text-[#232226] text-center"
                >
                  Learn More
                </Link>
              </div>
              {/* Grid 2 */}
              <div className="box-2 flex flex-col justify-end gap-4 group">
                <h4 className="text-2xl font-medium text-white">Digital Product Design</h4>
                <p className="text-base font-normal text-white/90">
                  Websites, marketing campaigns, SEO, and more — all in one place.
                </p>
                <Link
                  to="/contact"
                  className="hover-button bg-[#232226] border-[#414045] border-t border-l border-r text-white font-medium px-5 py-3 rounded-full transition-all duration-300 w-fit group-hover:bg-white group-hover:text-[#232226] text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

             {/* Grid container 2 */}
             <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
              {/* Grid 1 */}
              <div className="box-3-1 flex flex-col gap-4 group">
                <h4 className="text-2xl font-medium text-white">Website Design</h4>
                <p className="text-base font-normal text-white/90">
                  Bold ideas delivered with modern execution
                </p>
                <Link
                  to="/contact"
                  className="hover-button bg-[#232226] border-[#414045] border-t border-l border-r text-white font-medium px-5 py-3 rounded-full transition-all duration-300 w-fit group-hover:bg-white group-hover:text-[#232226] text-center"
                >
                  Learn More
                </Link>
              </div>
              {/* Grid 2 */}
              <div className="box-3-2 flex flex-col gap-4 group">
                {/* col-1 */}
                <div className="box-2-col-1 bg-no-repeat bg-cover bg-center flex flex-col gap-4 group"></div>
                {/* col-2 */}
                <div className="box-2-col-2 flex flex-col gap-4 group">
                <h4 className="text-2xl font-medium text-white text-center">Digital Product Design</h4>
                <p className="text-base font-normal text-white/90 text-center">
                  Websites, marketing campaigns, SEO, and more — all in one place.
                </p>
                </div>
              </div>
              {/* Grid 3 */}
              <div className="box-3-3 flex flex-col justify-end gap-4 group">
                <h4 className="text-2xl font-medium text-white">Digital Product Design</h4>
                <p className="text-base font-normal text-white/90">
                  Websites, marketing campaigns, SEO, and more — all in one place.
                </p>
                <Link
                  to="/contact"
                  className="hover-button bg-[#232226] border-[#414045] border-t border-l border-r text-white font-medium px-5 py-3 rounded-full transition-all duration-300 w-fit group-hover:bg-white group-hover:text-[#232226] text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/*CTA Section */}
      <section className="bg-[#192584] flex flex-col justify-center items-center rounded-2xl">
        <div className="text-center px-6 max-w-4xl mx-auto py-20 animate-fade-in">
            <h2 className="text-5xl font-medium mb-8 leading-tight animate-slide-in-right text-white">
               Let’s Create Something<br></br> Extraordinary
            </h2>
          <p className="text-lg text-white/90 mb-10">Your ideas + our creativity = digital success.</p>
          <Link to="/contact" className="inline-block bg-white hover:from-blue-900 hover:to-blue-700 text-black font-medium px-10 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
      {/* Slider One Section */}
      <CardSliderOne />      

      <Footer />
    </div>
  );
};

export default Index;
