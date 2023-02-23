import {
    // Button,
    // Checkbox,
    // FormControl,
    // FormLabel,
    Flex,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { color } from 'framer-motion';
  
  export default function Stores2() {
    return (
     <div style={{
// border:"1px solid black",
// backgroundColor:"rgb(248,247,246)",
width:"80%",
margin:"auto"

     }} >
<Stack minH={'20vh'} direction={{ base: 'column', md: 'row' }} >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <div> <Heading>
            Download The ModeSens App
          </Heading>
          <p>
          Scan any bar code or tag on a product to compare across 500+ stores <br/>
           before you buy.
          </p></div>
            
        </Flex>
        <Flex flex={1}>
           <Image h="70%"
            alt={'Login Image'}
            objectFit={'cover'}
            src={
                'https://cdn.modesens.com/static/img/20221231bg4_en.png'
            }
          />
        </Flex>
      </Stack>
      </div>
      
    );
  }


 