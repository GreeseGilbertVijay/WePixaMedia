import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
    <style>{`
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
      <section className="min-h-auto flex items-center justify-center">
        <div className="max-w-6xl py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-medium mb-20 leading-tight text-white">
              <span className="block animate-slide-in-right text-center">Our Services Make Your</span>
              <span className="block mb-4 animate-slide-in-right text-center">Vision Come Alive.</span>
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

      <Footer />
    </div>
  );
};

export default Index;
