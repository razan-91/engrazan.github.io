import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 

import { Box, Heading, Wrap } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
  { 
    title: "Web Development", 
    description: 
      "Creating, building and maintaining of websites. It includes aspects such as web design, web publishing, web programming and database management.", 
    getImageSrc: () => require("../images/photo4.jpg"), 
  }, 
  { 
    title: "Digital Marketing", 
    description: 
    "Marketing over digital channels such as search engines, social media and email to connect with current and prospective customers.", 
    getImageSrc: () => require("../images/photo2.jpg"), 
  }, 
  { 
    title: "Business Branding", 
    description: 
      "Creating a distinct identity for a business in the mind of your target audience and consumers.", 
    getImageSrc: () => require("../images/photo1.jpg"), 
  }, 
  { 
   title: "Technical Support", 
   description: 
     " Maintain and repair faults in IT systems, resolving network issues, and installing and configuring hardware and software.", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#2A4365" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Our Services 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()}
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;