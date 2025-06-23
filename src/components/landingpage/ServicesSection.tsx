import ServiceCard from "./servicesSection/ServiceCard";
// Import some icons from lucide-react (or your preferred library)
import { PenSquare, Home, Building2, View } from 'lucide-react';

// Data for our services. Keeping it here makes it easy to manage.
const servicesData = [
  {
    icon: <PenSquare size={32} />,
    title: "Architectural Design",
    description: "From concept to construction, we provide comprehensive architectural design services tailored to your vision."
  },
  {
    icon: <Home size={32} />,
    title: "Interior Design",
    description: "Creating functional and beautiful interior spaces that reflect your personality and lifestyle."
  },
  {
    icon: <Building2 size={32} />,
    title: "Urban Planning",
    description: "Strategic planning and design for sustainable and livable urban environments and communities."
  },
  {
    icon: <View size={32} />,
    title: "3D Visualization",
    description: "Bringing your projects to life with stunningly realistic 3D renderings and virtual tours."
  },
];

const ServicesSection = () => {
  return (
    // The section has a white background and vertical padding to create space.
    // min-h-[550px] is more responsive than a fixed height.
    <section className="bg-white py-24 sm:py-32 min-h-[550px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Integrated Section Header --- */}
        <div className="mb-12">
          {/* Decorative Top Bar */}
          <div className="flex w-full h-1 mb-4">
            <div className="w-1/4 bg-red-600" />
            <div className="w-3/4 bg-neutral-800" />
          </div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-red-600">
            Services
          </h2>
        </div>
        {/* --- End of Integrated Section Header --- */}

        {/* Responsive Grid for the service cards */}
        {/* It's 1 column on mobile and 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;