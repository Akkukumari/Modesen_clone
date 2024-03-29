import react from "react";
import { border, Image } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  head,
  Button,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Down from "./Down";
import Product from "./Product";
// import Shop from './Shop';

export default function Women() {
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        <Image
          h="100%"
          w="100%"
          src="https://modesens.com/banner/15075/getimg/?img=%2Fbanner%2F20230225-modesens-Ralph-1140x400-US-EN.jpg"
          alt="Dan Abramov"
        />
      </div>

      <Box m="10">
        <Heading>Featured Partners</Heading>
        <Text>
          Compare across our 500+ partner stores to find the products you want
          at the best price.
        </Text>
      </Box>
      <div
        style={{
          width: "70%",
          margin: " 20px auto",
        }}
      >
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-SSENSE-logo.png"
              alt="Dan Abramov"
            />{" "}
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png"
              alt="Dan Abramov"
            />{" "}
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png"
              alt="Dan Abramov"
            />{" "}
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-ITALIST-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png"
              alt="Dan Abramov"
            />
          </GridItem>
        </Grid>
      </div>

      <Box m="10">
        <Heading>
          New To Sale <hr></hr>
        </Heading>
      </Box>
      <div
        style={{
          width: "70%",
          margin: " 20px auto",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
        }}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/product/23113042_60?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">Toteme</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>{" "}
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/availability/55242864?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">MONCLER</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/availability/58677127?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">PERFECT MOMENT</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/product/54025914_1?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">TOTEME</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>
          </GridItem>
        </Grid>
      </div>
      <hr></hr>
      <Box m="10">
        <Heading>
          Special Offers <hr></hr>
        </Heading>
      </Box>
      <div
        style={{
          width: "70%",
          height: "550px",
          margin: " 20px auto",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
        }}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem className="imageGrid">
            <Image
              h="100%"
              w="65%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84DuEV90mFsd-IgYpF_KjgIlMQML48YNnQw&usqp=CAU"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">TIME TO SHINE</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>
          </GridItem>
          <GridItem className="imageGrid">
            <Image
              h="100%"
              w="65%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU1FjLohrMRSPCQVE1SiXCYwZ1iHdbAry5A&usqp=CAU"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">MONCLER</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>
          </GridItem>
          <GridItem className="imageGrid">
            <Image
              h="100%"
              w="65%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGGmTepnumgGvmcgLaW6UZlvtBryoxBg2Zg&usqp=CAU"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">PERFECT MOMENT</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Button>SHOP NOW</Button>
          </GridItem>
        </Grid>
      </div>

      {/* <Shop/> */}
      <Box m="10">
        <Heading>
          Trending Now <hr></hr>
        </Heading>
      </Box>
      <div
        style={{
          width: "50%",
          height: "400px",
          margin: " 20px auto",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
        }}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <Image
              h="55%"
              w="80%"
              src="https://cdn.modesens.com/availability/45835347?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">VERSACE</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
          <GridItem>
            <Image
              h="55%"
              w="80%"
              src="https://cdn.modesens.com/availability/58843916?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">ZIMMERBANN</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
          <GridItem>
            <Image
              h="55%"
              w="80%"
              src="https://cdn.modesens.com/availability/59249890?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">KHAITE</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
          <GridItem>
            <Image
              h="55%"
              w="80%"
              src="https://cdn.modesens.com/availability/59219459?w=400"
              alt="Dan Abramov"
            />
            <Box fontSize="20px">MAX MARA</Box>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </GridItem>
        </Grid>
      </div>

      <Box m="10">
        <Heading>Community Posts</Heading>
        <hr></hr>
      </Box>
      <div
        style={{
          width: "70%",
          margin: " 20px auto",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;",
        }}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/umedia/1714595s?w=400"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/umedia/1715425s?w=400"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/umedia/603544s?w=400"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem>
            <Image
              h="80%"
              w="80%"
              src="https://cdn.modesens.com/umedia/731870s?w=400"
              alt="Dan Abramov"
            />
          </GridItem>
        </Grid>
      </div>
      <Down />
      <Footer />
    </>
  );
}
