import { 
    Factory, 
    BrainCircuit, 
    Car, 
    CloudUpload, 
    Lightbulb, 
    Landmark, 
    Package, 
    GraduationCap, 
    Bot
  } from "lucide-react";
  
  const WhoShouldDemonstrate = () => {
    const categories = [
      { icon: <Bot size={50} className="text-blue-600" />, text: "Industrial Robotics & Automation Companies" },
      { icon: <Factory size={50} className="text-blue-600" />, text: "Manufacturing & Smart Factory Solution Providers" },
      { icon: <BrainCircuit size={50} className="text-blue-600" />, text: "AI, Machine Learning, and Computer Vision Companies" },
      { icon: <Car size={50} className="text-blue-600" />, text: "Automotive & Electronics Manufacturers" },
      { icon: <CloudUpload size={50} className="text-blue-600" />, text: "Industrial IoT (IIoT) & Cloud Computing Providers" },
      { icon: <Lightbulb size={50} className="text-blue-600" />, text: "Startups & Tech Innovators in Robotics" },
      { icon: <Landmark size={50} className="text-blue-600" />, text: "Government Agencies & Research Institutions" },
      { icon: <Package size={50} className="text-blue-600" />, text: "Logistics, Warehouse, and Supply Chain Companies" },
      { icon: <GraduationCap size={50} className="text-blue-600" />, text: "Universities & Educational Institutions" },
    ];
  
    return (
      <section className="py-16 text-center text-white">
        <h2 className="text-4xl font-bold text-white mb-8">Who Should Demonstrate?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-white">
              {category.icon}
              <p className="mt-4 text-lg font-medium text-center">{category.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhoShouldDemonstrate;
  