import React from "react"; 
import { Image, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
  const greeting = "Hello, I am Razan!"; 
const bio1 = "Front-end developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
     <Image
          borderRadius='15px'
          backgroundColor='#FFF'
          boxSize='120px'
          p={6}
          src={require('./../images/logo1.png')}
          alt='razan logo'
          fallbackSrc='https://via.placeholder.com/150'
          marginBottom={2}
          marginTop={2}
      />
       <Heading as="h2" fontSize={{ base: '26px', md: '28px', lg: '36px' }} noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" fontSize={{ base: '38px', md: '44px', lg: '56px' }} noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h2" fontSize={{ base: '28px', md: '28px', lg: '34px' }}  color='#61dafb' noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;