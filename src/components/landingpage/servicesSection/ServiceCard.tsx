import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="
        border border-red-500 p-6 
        transition-all duration-300
        hover:shadow-lg hover:border-red-700 hover:-translate-y-1
      "
    >
      <div className="flex items-start gap-4">
        <div className="text-red-600 mt-1">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
          <p className="mt-2 text-neutral-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;