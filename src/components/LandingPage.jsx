import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems, features, resourcesLinks, platformLinks, communityLinks } from "../constants";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


const LandingPage = ({ onJoinWaitlistClick }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-2xl font-bold text-red-600 tracking-tight">Sentiment X</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
              <a href="#" className="bg-gradient-to-r from-red-600 to-red-500 py-2 px-3 rounded-md">Sign Up</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-red-600 to-red-500">Sign Up</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center mt-6 lg:mt-20 flex-grow">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Where <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">Data Meets Emotion</span>
        </h1>
        <p className="mt-10 text-lg text-center text-black-300 max-w-4xl">
          Sentiment X is an innovative platform designed to revolutionize trading through AI-driven sentiment analysis. Our cutting-edge system captures real-time sentiment data from social media, news, and market trends, helping you make informed decisions in a fast-paced trading environment.
        </p>
        <div className="flex justify-center my-10">
          <a href="https://www.instagram.com/sentimentx.ai/?igsh=MXg5MHY1NWNkNHRsYw%3D%3D" className="bg-gradient-to-r from-red-500 to-red-800 py-3 px-4 mx-3 rounded-md">
            <span className="text-white">Social Links</span>
          </a>
          <button
            onClick={onJoinWaitlistClick}
            className="py-3 px-4 mx-3 rounded-md border"
          >
            Join the Waitlist
          </button>
        </div>
        <div className="flex mt-10 justify-center">
          <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Feature Section */}
      <div className="relative mt-20 min-h-[500px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Feature</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Why <span className="bg-gradient-to-r from-cyan-500 to-orange-600 text-transparent bg-clip-text">Sentiment X?</span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-5 h-7 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-3 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-10 text-neutral-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-black-300 hover:text-white">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-black-300 hover:text-white">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-black-300 hover:text-white">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
