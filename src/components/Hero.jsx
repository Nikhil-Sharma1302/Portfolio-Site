import { motion } from 'framer-motion';
import profile from '../profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link } from '@mui/material';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-accent">
            <img
              src={profile}
              alt="Nikhil Sharma"
              className="w-full h-full object-cover"
            />
          </div>

       
          <Box display="flex" gap={2}>
            <Link
              href="https://github.com/Nikhil-Sharma1302"
              target="_blank"
              rel="noopener"
              underline="none"
              sx={{ color: '#cbd5e1', display: 'flex', alignItems: 'center' }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://linkedin.com/in/nikhil-webdev"
              target="_blank"
              rel="noopener"
              underline="none"
              sx={{ color: '#0ea5e9', display: 'flex', alignItems: 'center' }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Hi, I'm Nikhil Sharma
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            I’m a dedicated MERN Stack Developer with a strong passion for creating elegant, high-performance web applications. I specialize in modern frontend interfaces and robust backend systems.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            From interactive dashboards to real-time messaging apps, I focus on writing clean, maintainable code. I integrate technologies like React.js, Node.js, Express, MongoDB, Redux, and JWT to deliver complete, scalable solutions.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I thrive in fast-paced environments and love solving real-world problems with code. Whether it's using Tailwind CSS or Material UI for design, or integrating Socket.IO for live features — I build with performance and user experience in mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
