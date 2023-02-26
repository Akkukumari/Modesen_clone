import React from "react";
import { Image } from '@chakra-ui/react'
import { Grid, GridItem,Heading,Text,Box,Button } from '@chakra-ui/react'
import Blogs from './Blogs';
// import New from './New';
import Footer from './Footer';

export default function Community() {
    return( 
        <>
    <div 
    style={{
    width:"80%",
    margin :"auto",
    }} >
        <Text>
        ModeSens automatically updates you on new arrivals <br/>back in stock items and sales
        <Box m = "5">
        <p style={{
            textDecoration:"underline"
        }}>Create an account today</p>
        </Box>
        </Text>
     <Image h="100%" w="100%" src='https://modesens.com/banner/15084/getimg/?img=%2Fbanner%2F20230224-modesens-hashtag-1440x250-EN.jpg' alt='Dan Abramov' />
    </div> 
    
   <div> <Text fontSize="25">DISCOVER    BLOGS</Text></div>

   <Box m = "50">
<Heading>Fashion News and Style Guide</Heading>

<Box m = "10"><Text>
  Explore and get inspired by the latest luxury fashion news, beauty trends, outfit ideas and more blogs selected by the ModeSens editorial team.
  </Text></Box>
</Box>
<Box m = "50"></Box><hr></hr>

<Blogs/><hr></hr>
<div style={{
    width:"80%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/LFWBanner_1677099972.png?w=800'/>
<Box m = "10">
<Heading>MODESENS INFLUNCERS OF THE WEEK LIFESTYLE WITH OLA </Heading> 
<Text>Feb 23 2023 by ModeSens </Text>
</Box>
</div>
<hr/>
<div style={{
    width:"80%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/LouisVuittonBanner_1677174009.png?w=800'/>
<Box m = "10">
<Heading>13 BLACK OWNED- BRANDS TO LOVE & ALWAYS </Heading> 
<Text>Feb 07 2023 by ModeSens </Text>
</Box>
</div>

<div style={{
    width:"80%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/DenimTrendsBlog_1676932932.png?w=800'/>
<Box m = "10">
<Heading>13 BLACK OWNED- BRANDS TO LOVE & ALWAYS</Heading> 
<Text>Feb 23 2023 by ModeSens </Text>
</Box>
</div>
<hr/>
<div style={{
    width:"80%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/O_1676311698.png?w=800'/>
<Box m = "10">
<Heading>BLACK HISTORY MONTH: INFLUNCER HIGHLIGHT </Heading> 
<Text>Feb 07 2023 by ModeSens </Text>
</Box>
</div>

<hr/>
<div style={{
    width:"80%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/NYFWBanner_1676491982.png?w=800'/>
<Box m = "10">
<Heading>LUXURY VALENTINE'S DAY GIFTS PICKED UP BY OUR FASHION</Heading> 
<Text>Jan 27 2023 by ModeSens </Text>
</Box>
</div>
<hr/>
<div style={{
    width:"80%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/BHMBanner_1676482054.png?w=800'/>
<Box m = "10">
<Heading> 7 SPRING DENIM TRENDS BY OUR FASHION</Heading> 
<Text>Jan 09 2023 by ModeSens </Text>
</Box>
</div>

<hr/>
<div style={{
    width:"80%",
    // height:"10%",
    margin:"auto",
}}>
<Image h="80%" w="100%" src='https://cdn.modesens.com/banner/PlatformsBlogBanner_1676323433.png?w=800'/>
<Box m = "10">
<Heading>THE POWER OF PLATFORM SHOES</Heading> 
<Text>Feb 08 2023 by ModeSens </Text>
</Box>
</div>

<hr/>
<div style={{
    width:"80%",
    height:"10%",
    margin:"auto",
}}>
<Image h="10%" w="100%" src='https://cdn.modesens.com/banner/BannerFashionNoodle_1675709072.png?w=800'/>
<Box m = "10">
<Heading>5 TRENCY FASHION FAVRIOTES YOU SHOULD TRY IN 2023</Heading> 
<Text>Jan 30 2023 by ModeSens </Text>
</Box>
</div>
<hr/>
<div style={{
    width:"80%",
    height:"10%",
    margin:"auto",
}}>
   <Image h="10%" w="100%" src='https://cdn.modesens.com/banner/13Black-OwnedBrandsToLoveNowAlways_1675463170_1675802439.png?w=800'/>
<Box m = "10">
<Heading>THE POWER OF PLATFORM SHOES</Heading> 
<Text>Feb 14 2023 by ModeSens </Text>
</Box>
</div>
<hr/>
<div style={{
    width:"80%",
    height:"10%",
    margin:"auto",
}}>
   <Image h="10%" w="100%" src='https://cdn.modesens.com/banner/Evedawes_1675437402.png?w=800'/>
<Box m = "10">
<Heading>THE POWER OF PLATFORM SHOES</Heading> 
<Text>Feb 14 2023 by ModeSens </Text>
</Box>
</div>
<hr/>
<div style={{
    width:"80%",
    height:"10%",
    margin:"auto",
}}>
   <Image h="10%" w="100%" src='https://cdn.modesens.com/banner/LOVEISHERE-2_1674842932.png?w=800'/>
<Box m = "10">
<Heading>THE POWER OF PLATFORM SHOES</Heading> 
<Text>Feb 14 2023 by ModeSens </Text>
</Box>
</div>
<Footer/>
</>

    )
}
