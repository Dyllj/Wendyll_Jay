import { useState } from 'react';
import SplitText from '../components/SplitText/Split_Text';
import RadioButtons from '../components/RadioButtons/RadioButtons';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ScrollFadeIn from '../components/ScrollFadeIn/Scroll_FadeIn';
import capstoneIOT from '../assets/capstoneIOT.png';
import alertechWeb from '../assets/alertechWeb.png';
import alertechMobile from '../assets/alertechMobile.png';
import portfolio from '../assets/portfolio.png';
import WaterLevelMonitor from '../assets/WaterLevelMonitor.jpg';
import projectApp from '../assets/projectApp.png';
import IoT_Water_Level_Monitoring from '../assets/IoT_Water_Level_Monitoring.pdf';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Flood Monitoring System",
      description: "IoT-based real-time flood monitoring dashboard with automated alerts and water level tracking.",
      image: capstoneIOT,
      techStack: ["NodeMCU", "React", "Firebase", "Sensors"],
      links: {
        github: "https://github.com/Dyllj/flood_monitoring_system",
        web: "https://floodmonitor-292dc.web.app/"
      },
      category: "Featured"
    },
    {
      id: 2,
      title: "Alertech Web",
      description: "A web dashboard for real-time icident monitoring and authority management",
      image: alertechWeb,
      techStack: ["React", "Node.js", "PosgreSql", "Vercel"],
      links: {
        github: "https://github.com/Dyllj/alertech",
      },
      category: "Featured"
    },
    {
      id: 3,
      title: "Alertech Mobile",
      description: "A mobile application for incident reporting with AI verification and real-time updates.",
      image: alertechMobile,
      techStack: ["Flutter", "Dart", "PostgreSql", "Semaphore", "Amazon SES"],
      links: {
        github: "https://github.com/Dyllj/alertech_mobile",
      },
      category: "Featured"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "A web portfolio to showcase my projects and skills",
      image: portfolio,
      techStack: ["React", "Tailwind", "Vercel", "EmailJS"],
      links: {
        github: "https://github.com/Dyllj/my_portfolio",
      },
      category: "Personal"
    },
    {
      id: 5,
      title: "Water Level Monitoring System",
      description: "An IoT-based water level monitoring system using Arduino IOT Cloud",
      image: WaterLevelMonitor,
      techStack: ["NodeMCU", "Relay Module", "HC-SR04T", "Arduino IOT Cloud"],
      links: {
        docs: IoT_Water_Level_Monitoring
      },
      category: "Featured"
    },
    {
      id: 5,
      title: "Mobile App Portfolio",
      description: "A mobile app portfolio with basic navigation panel",
      image: projectApp,
      techStack: ["React Native", "Expo"],
      links: {
        github: "https://github.com/Dyllj/ProjectApp",
      },
      category: "Personal"
    },
    
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="works" className="w-full bg-zinc-800 py-16 mt-5">
      <ScrollFadeIn>
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-5 bg-linear-to-b from-zinc-800 via-amber-700 to-zinc-800 py-10 h-180 ">
        <div className="flex gap-12 items-start">
          {/* Left: Title */}
          <div className="w-64 shrink-0 ml-5">
            <SplitText
              text="My Works"
              className="text-4xl md:text-5xl font-bold text-zinc-200"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              tag="h2"
            />
            <p className="text-zinc-300 text-lg mt-4 leading-relaxed font-Strait font-bold">
            Explore my recent projects showcasing my expertise in web development, IoT systems, and innovative solutions.
          </p>
          </div>

          {/* Middle: Radio Buttons */}
          <div className="w-48 mt-5 shrink-0">
            <RadioButtons 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Right: Project Cards Grid */}
          <div className="flex-1 -mt-15">
            <ScrollFadeIn key={selectedCategory}>
              <div className="grid grid-cols-3 -ml-20 gap-y-10">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    techStack={project.techStack}
                    links={project.links}
                    category={project.category}
                  />
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
      </ScrollFadeIn>
    </section>
  );
};

export default Works;