import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HologramViewer from '@/components/HologramViewer';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import CountUp from '@/components/ui/count-up';
import Beams from '@/components/ui/beams';
import ContainerScrollDemo from '@/components/ContainerScrollDemo';

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-none text-gray-900 dark:text-white"
            >
              <span className="block">InnoXR</span>
              <span className="block font-light bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Labs
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "linear" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extralight leading-tight text-gray-900 dark:text-white"
            >
              Your Vision is Our Technology
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-500 max-w-4xl mx-auto font-light leading-relaxed px-4"
            >
              We transform your innovative ideas into cutting-edge reality through AI-powered holograms, 
              immersive AR/VR experiences, and intelligent automation solutions that bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "linear" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: "linear" }}
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg group border-0 w-full sm:w-auto"
                  onClick={() => scrollToSection('products')}
                >
                  Explore HoloInteract
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: "linear" }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50/80 dark:hover:bg-gray-900/80 hover:border-gray-400 dark:hover:border-gray-600 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg group w-full sm:w-auto"
                  onClick={() => scrollToSection('demo')}
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "linear" }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => scrollToSection('products')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Product Showcase with Beams Background */}
      <section id="products" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Beams Background */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={1.5}
            beamHeight={12}
            beamNumber={8}
            lightColor="#ffffff"
            speed={1.5}
            noiseIntensity={1.2}
            scale={0.15}
            rotation={0}
          />
        </div>
        
        {/* Content overlay with reduced transparency */}
        <div className="relative z-10 bg-white/60 dark:bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900 dark:text-white">
                HoloInteract
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed px-4">
                Two editions designed for different needs. Same revolutionary technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
              {/* DIY Edition */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "linear" }}
                className="space-y-6 sm:space-y-8"
              >
                <HologramViewer type="diy" />
                
                <div className="text-center lg:text-left space-y-4 sm:space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
                    className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100/80 dark:bg-amber-900/20 backdrop-blur-sm text-amber-700 dark:text-amber-400 rounded-full text-xs sm:text-sm font-medium"
                  >
                    Perfect for Education
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
                    DIY <span className="font-medium">Edition</span>
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Build your own holographic display in <CountUp to={30} duration={1.5} className="font-medium text-amber-600 dark:text-amber-400" /> minutes. Perfect for students, educators, and makers 
                    who want to explore the fascinating world of 3D projections and AI interaction.
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white">
                        $<CountUp to={49} duration={2} className="font-medium" />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white">
                        <CountUp to={30} duration={1.5} className="font-medium" />min
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Assembly</div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "linear" }}
                  >
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 hover:shadow-lg border-0 w-full sm:w-auto"
                      onClick={() => handleNavigation('/products')}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enterprise Edition */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
                className="space-y-6 sm:space-y-8"
              >
                <HologramViewer type="enterprise" />
                
                <div className="text-center lg:text-left space-y-4 sm:space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "linear" }}
                    className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100/80 dark:bg-blue-900/20 backdrop-blur-sm text-blue-700 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium"
                  >
                    Professional Grade
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
                    Enterprise <span className="font-medium">Edition</span>
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Premium holographic system for businesses, museums, and exhibitions. Featuring advanced AI 
                    integration and enterprise-grade customization capabilities.
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white">
                        $<CountUp to={499} duration={2.5} className="font-medium" />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Starting Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white">
                        <CountUp to={4} duration={1} className="font-medium" />K
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Display</div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "linear" }}
                  >
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 hover:shadow-lg border-0 w-full sm:w-auto"
                      onClick={() => handleNavigation('/products')}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section id="features" className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900 dark:text-white">
              Advanced Technology
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed px-4">
              Powered by cutting-edge AI and computer vision for seamless interaction
            </p>
          </motion.div>

          <InteractiveFeatures />
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="w-full bg-white/30 dark:bg-black/30 backdrop-blur-sm">
        <ContainerScrollDemo />
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900 dark:text-white">
              What People Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                quote: "HoloInteract has revolutionized how we present our products to clients. The Enterprise Edition is simply amazing!",
                author: "Sarah Chen",
                role: "Museum Director",
                company: "National Science Museum"
              },
              {
                quote: "The DIY version is perfect for our computer science classes. Students are fascinated by the holographic displays.",
                author: "Dr. Raj Patel",
                role: "Professor",
                company: "MIT Technology Institute"
              },
              {
                quote: "Incredible technology that feels like science fiction made real. The gesture controls are so intuitive.",
                author: "Michael Torres",
                role: "Innovation Manager",
                company: "TechCorp Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "linear"
                }}
                whileHover={{ y: -4 }}
              >
                <Card className="border border-gray-200 dark:border-gray-800 shadow-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl h-full hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-light italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                      <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-600">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight">
              Ready to Experience the Future?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-95 px-4">
              Join <CountUp to={10000} duration={3} separator="," className="font-medium" />+ educators and businesses using HoloInteract to create immersive experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: "linear" }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg group border-0 w-full sm:w-auto"
                  onClick={() => handleNavigation('/products')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: "linear" }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/40 text-white hover:bg-white/15 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
                  onClick={() => handleNavigation('/contact')}
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;