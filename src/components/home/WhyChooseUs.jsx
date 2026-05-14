import Image from 'next/image';
import ShieldCheck from '@/assets/ShieldCheck.png';
import MapTrifold from '@/assets/MapTrifold.png';
import Headset from '@/assets/Headset.png';

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      description: "Your safety is our priority with comprehensive travel insurance and 24/7 support."
    },
    {
      icon: MapTrifold,
      title: "Expert Guides",
      description: "Local experts who bring destinations to life with authentic cultural insights."
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you whenever your journey takes you."
    }
  ];

  return (
    <section className="bg-[#f0fbff] py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Why Choose Wanderlust
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
