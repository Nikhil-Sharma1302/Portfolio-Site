import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "🛍️ Shopping Paradise",
    desc: "Shopping Paradise is a full-featured e-commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It offers a smooth and intuitive shopping experience with features like user authentication, product listing, cart management, and admin controls — all wrapped in a clean, responsive UI.",
    bullets: [
      "User Authentication with secure login/signup",
      "Product Listing & Detail Pages with dynamic rendering",
      "Add to Cart & Checkout Flow (frontend cart management)",
      "Admin Dashboard to manage products (Add, Edit, Delete)",
      "Responsive Design using Material UI, Tailwind, and Bootstrap",
      "Error handling and user feedback via toasts",
    ],
    credentials: {
      email: "nikhil7597013249@gmail.com",
      password: "nikhil@123",
    },
    link: "https://nikhil-shopping-paradise.netlify.app",
  },
  {
    title: "💬 Real-Time Chat App",
    desc: "This is a fully functional real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. It allows users to register, log in, and engage in secure one-on-one messaging. Messages are stored in a MongoDB database, and real-time communication is enabled through WebSockets using Socket.IO.",
    bullets: [
      " User Authentication – JWT-secured login and registration",
      "Real-Time Messaging – Powered by Socket.IO for instant communication",
      "MongoDB Message Storage – Chats are persisted for history",
     "  User Search – Easily search and select users to chat",
      "User authentication with JWT",
      "Protected Routes – Pages only accessible after authentication",
    ],
    link: "https://nikhil-chatapplication.netlify.app",
  },
  {
    title: "🛒 Shop Cart",
    desc: "This is a basic e-commerce frontend application built using React.js. It simulates an online shopping experience by fetching product data from a local JSON file and displaying it in a clean, responsive layout.",
    bullets: [
      " Built with React.js and functional components",
      "Product data is sourced from a local JSON file",
      "Clean UI with product cards showing image, name, price, and description",
      "  Includes a working “Add to Cart” button (UI only – no backend)",
      " Responsive design for desktop and mobile screens",
      "LocalStorage Persistence",
    ],
    link: "https://nikhil-shop-cart.netlify.app",
  },
  {
    title: "🎧 Music Player",
    desc: "This is a simple and functional music player built using React.js that integrates with the Spotify API to fetch and display a list of songs based on user interest or search input. It offers an interactive experience where users can listen to songs, view composer details, and explore more about the track.",
    bullets: [
      "Developed using React.js and Spotify API",
      "Fetches and displays songs based on selected query or category",
      "Clean, responsive UI with engaging visuals",
      "Smooth user experience and API handling",
      "Users can play a song directly from the app",
    ],
    link: "https://nikhil-music-player.netlify.app",
  },
  {
    title: "🎬 Movies App",
    desc: "This is a simple and clean movie search application built using React.js. It allows users to search for movies by name and fetches real-time results using a public movie API.",
    bullets: [
      "Developed using React.js with hooks and functional components",
      " Integrates with a public Movie API (e.g., OMDb API) to fetch movie data",
      "Responsive UI built for smooth use on both desktop and mobile",
      " Clean layout with easy-to-read movie cards",
      "Users can search for any movie, and the app displays key details like Movie title, Poster Image and many more... ",
    ],
    link: "https://nikhil-movies-app.netlify.app",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Projects = () => (
  <section id="projects" className="py-20 bg-[#0f172a] text-white">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-4xl font-bold text-center text-accent mb-12">
        Projects
      </h2>

      <Slider {...sliderSettings}>
        {projects.map((project, i) => (
          <div key={i} className="px-3">
            <div className="bg-[#1e293b] rounded-xl border border-accent shadow-md p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
                  {project.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                {project.credentials && (
                  <div className="text-sm text-gray-400 mb-4">
                    <p className="mb-1">
                      🔐{" "}
                      <span className="text-white font-medium">
                        Admin Credentials:
                      </span>
                    </p>
                    <p>
                      <span className="text-accent">Email:</span>{" "}
                      {project.credentials.email}
                    </p>
                    <p>
                      <span className="text-accent">Password:</span>{" "}
                      {project.credentials.password}
                    </p>
                  </div>
                )}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-accent hover:bg-cyan-500 text-white text-sm py-1 px-3 rounded-md transition self-start"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default Projects;
