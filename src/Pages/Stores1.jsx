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
  
  export default function Stores1() {
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
            Locate Any Product <br/>
             In One Second
          </Heading>
          <p>
          Simply copy any product url and search it on <br/>
           ModeSens. Our patented technology helps you<br/>
            easily locate it on ModeSens and compare<br/>
             across 500+ partner stores.
          <br/>
          TRY IT OUT.
          </p></div>
            
         
        </Flex>
        <Flex flex={1} className='imageFlex'>
           <Image h="70%"
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://lh3.googleusercontent.com/OnIJIIcKp_1kR0tR3BT2uXbSHTdjDuqU2f52Vf63ylo9wM-PgeB27mZX6TnCOLiF_HGVPQ3rXdr0Mhto5z2HiVjb_g=w640-h400-e365-rj-sc0x00ffffff'
            }
          />
        </Flex>
      </Stack>
      </div>
      
    );
  }


 