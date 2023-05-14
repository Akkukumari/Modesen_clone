import { useEffect, useState } from "react";
import Footer from "./Footer";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../services/api";
import { ProductDetails } from "./ProductDetails";

export default function Product() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts([...res]);
    });
  }, []);

  return (
    <Container maxW={"7xl"}>
      <div className="upper-part">
        MODESENS / DESIGNERS / WOMEN / CLOTHING / DRESSES / MINI DRESSES
      </div>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <div className="productImages">
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "750px" }}
            />
            <div className="smallImg">
              <img src={data.img} alt="img" />
              {data?.imgArray?.map((el) => (
                <img src={el} alt="mapImg" />
              ))}
            </div>
          </div>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.designer}
            </Heading>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {data.about}
              </Text>
            </VStack>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Rs.{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{data.detail}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Avalability
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Size</ListItem>
                  <ListItem>Color</ListItem> <ListItem>Rating</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>S M L XL</ListItem>
                  <ListItem> Pink, Black, White</ListItem>
                  <ListItem>4.1</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem className="pro-details">
                  {/* Zimmermann Wonderland Mini Dress In White linen and viscose
                  blend featuring a <br></br>
                  multicolor floral print, V-neck,smocked,flared pleated skirt
                  and zip at center back.<br></br> */}
                  Material 52% linen, 48% silk organza mix.<br></br>
                  Made in China 52,5%Li47,5Se.<br></br>
                  Model is wearing a size0<br></br>
                  Dry clean wash only<br></br>
                  Above knee length <br></br>
                  Back zip closure <br></br>
                  Off-white tone<br></br>
                  V-neck dress<br></br>
                  Sleeveless<br></br>
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Link to="/order" state={{ data }}>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Buy Now
            </Button>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <div>
        <img src="https://cdn.modesens.com/static/img/20230330prd-banner.png" />
      </div>
      <div>
        <div className="subscribe">
          <div className="first-text">Subscribe To Alerts</div>
          <button className="alert">SET ALERT</button>
        </div>
        <div className="second-text">
          We'll keep our eyes out for you. Subscribe to receive automatic email
          and app updates to be the first to know when this item becomes
          available in new stores, sizes or prices.
        </div>
      </div>

      <div>
        <img src="https://modesens.com/banner/15541/getimg/?img=%2Fbanner%2F20230418-modesens-Urban-1440x250-US.jpg" />
      </div>
      <div className="more-products">View More Products</div>
      <div className="grid-container">
        {products?.map((el) => (
          <ProductDetails key={el.id} {...el} el={el} />
        ))}
      </div>
      <Footer />
    </Container>
  );
}
