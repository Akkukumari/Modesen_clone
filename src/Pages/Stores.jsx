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
  
  export default function Stores() {
    return (
     <div style={{
// border:"1px solid black",
backgroundColor:"rgb(248,247,246)",
width:"80%",
margin:"auto"

     }} >
<Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }} >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <div> <Heading>

          Compare 500+ Stores <br/>
           In One Place

          </Heading>
          <p>
          ModeSens allows you to compare prices and 
           availability across <br/>
           hundreds of stores and 
            thousands of brands.
            <br/>
          TRY IT OUT.
          </p></div>
            
         
        </Flex>
        <Flex flex={1} className='imageFlex'>
           <Image h="70%"
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://cdn.modesens.com/static/img/20221231bg3_en.png'
            }
          />
        </Flex>
      </Stack>
      </div>
      
    );
  }


 