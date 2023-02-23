import React from "react";
import { Image } from '@chakra-ui/react'
import { Grid, GridItem,Heading,Text,Box } from '@chakra-ui/react'
import Stores from './Stores';
import Stores1 from './Stores1';
import Stores2 from './Stores2';
import Footer from './Footer';
export default function Home() {
return( 
    <>
<div>
 <Image h="100%" w="100%" src='https://cdn.modesens.com/static/img/20221009_bg1.png' alt='Dan Abramov' />
</div>

<Stores/>

<Box m = "10">
<Heading>
  500+ PREMIUM PARTNERS
  </Heading>
  <Text>
  We only partner with the most reputable stores and brands to offer you the
   largest selections and most trustworthy shopping experience online.
  </Text>
</Box>

<div style={{
width:"70%",
// border:"1px solid grey",
margin:" 20px auto"
}} >

<Grid templateColumns='repeat(6, 1fr)' gap={4}>
  <GridItem><Image h="80%" w="80%" src='https://cdn.modesens.com/banner/20220708-SSENSE-logo.png' alt='Dan Abramov' /> </GridItem>
  <GridItem><Image h="80%" w="80%" src='https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png' alt='Dan Abramov' /></GridItem>
  <GridItem><Image h="80%" w="80%" src='https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png' alt='Dan Abramov' /></GridItem>
  <GridItem><Image h="80%" w="80%" src='https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png' alt='Dan Abramov' /> </GridItem>
  <GridItem><Image h="80%" w="80%" src='https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png' alt='Dan Abramov' /> </GridItem>
  <GridItem><Image h="80%" w="80%" src='https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png' alt='Dan Abramov' /></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20220708-ITALIST-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png'alt='Dan Abramov' /></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-GUCCI-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-PRADA-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-FENDI-logo.png'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-VERSACE-logo.png' alt='Dan Abramov'/> </GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png' alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png' alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-LOEWE-logo.png' alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-OFF-WHITE-logo.png' alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="80%"src='https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png' alt='Dan Abramov'/></GridItem>
</Grid>
</div>

<Stores1/>

<Box m = "10">
<Heading>
COMPARE AND SHOP WHEREVER YOU GO
  </Heading>
  <p>To unlock all of ModeSens' features and functionality, simply download our App and Browser <br/> Extension.</p>
  </Box>
<Stores />
<Stores2 />
<div
 style={{
width:"80%",
// border:"1px solid grey",
margin:"  auto"
}} 
>
 <Image h="100%" w="100%" src='https://cdn.modesens.com/static/img/20220915-bg2.png' alt='Dan Abramov' />
</div>
<Box m = "50">
<Heading>
  SHOP YOUR FAVORITE CATEGORY
  </Heading>
  </Box>
<div style={{
width:"80%",
// border:"1px solid grey",
margin:"  auto"
}} >
<Grid textAlign="center"  templateColumns='repeat(2, 1fr)' gap={0}>
<Image h="80%"w="100%"src='https://cdn.modesens.com/banner/20220916Category-women-modesens.jpg'alt='Dan Abramov'/> 
<Image h="80%"w="100%"src='https://cdn.modesens.com/banner/20220916Category-men-modesens.jpg'alt='Dan Abramov'/>
</Grid>
</div>

<div
 style={{
  width:"80%",
  // border:"1px solid grey",
  margin:"-55px  auto"
  }}>
<Grid  textAlign="center" templateColumns='repeat(3, 1fr)' gap={0}>
  <GridItem><Image h="80%"w="100%"src='https://cdn.modesens.com/banner/20220916Category-kids-modesens.jpg'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="100%"src='https://cdn.modesens.com/banner/20220916Category-beauty-modesens.jpg'alt='Dan Abramov'/></GridItem>
  <GridItem><Image h="80%"w="100%"src='https://cdn.modesens.com/banner/20220916Category-home-modesens.jpg'alt='Dan Abramov'/></GridItem>
</Grid>
</div>

<Stores1/>

<div style={{
width:"80%",
// border:"1px solid grey",
margin:"  auto"
}} >
<Grid textAlign="center"  templateColumns='repeat(1, 1fr)' gap={0}>
<Image h="80%"w="100%"src='https://cdn.modesens.com/static/img/20220915-bg3.png'alt='Dan Abramov'/> 
</Grid>
</div>
<p>Join Today to Unleash the Full Power of ModeSens</p>
<hr></hr>
<Footer/>
</>
)
}


 