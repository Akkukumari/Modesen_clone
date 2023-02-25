import {
    Flex,
    Heading,
    Input,
    Link,
    Grid,
    Box,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
import { color } from 'framer-motion';
  
  export default function Stores() {
    return (
     <div style={{
border:"1px solid black",
backgroundColor:"rgb(248,247,246)",
width:"80%",
margin:"auto",
     }} >
<Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }} >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <div> <Heading>
            Download the  <br/>
            ModeSens App
          </Heading>
          <p>A seamless experience that takes your style <br/> to the next level.
          </p>
          <Button>DOWNLOAD NOW</Button></div>
        </Flex></Stack>
    
        <div style={{
           width:"70%",
           margin:"auto",
           boxShadow:"rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
}} ></div>
        <Grid templateColumns='repeat(2, 1fr)' gap={0}>
<div><Image h="60%" w="50%" src='https://cdn.modesens.com/static/img/20230220appdownload_en.webp'alt='Dan Abramov'/></div>
  <div><Image h="60%" w="50%" src='https://cdn.modesens.com/static/img/20230220installextension_en.webp'alt='Dan Abramov'/></div>
</Grid>
  
      </div>
      
    );
  }


 