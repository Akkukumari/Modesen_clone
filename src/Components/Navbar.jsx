import { react } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Image,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  Popover,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, BellIcon } from "@chakra-ui/icons";
import { PiHeartFill } from "react-icons/pi";
import {PiBagSimpleFill}  from "react-icons/pi";
import { useSelector } from "react-redux";

// const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth } = useSelector((state) => state.authReducer);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              w="10%"
              src="https://user-images.githubusercontent.com/112841772/221427427-5bd2c0a5-67f2-4c6f-9c6d-1160303605c9.png"
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <RouterLink to="/women">
                <NavLink>WOMEN</NavLink>
              </RouterLink>

              <NavLink>MEN</NavLink>
              <NavLink>BEAUTY</NavLink>
              <NavLink>KIDS</NavLink>
              <NavLink>HOME</NavLink>
              <NavLink>DESIGNERS</NavLink>

              <RouterLink to="/community">
                <NavLink>COMMUNITY</NavLink>
              </RouterLink>

              <NavLink>SALE</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu className="icons">
              <Popover>
                <PopoverTrigger>
                  <BellIcon
                    w={8}
                    h={8}
                    // color="white"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader> Your Notification </PopoverHeader>
                  <PopoverCloseButton />
                  <h6 className="notification">
                    New Notification on Modesen
                    <p>
                      Sell your digital assets to the world’s <br></br>
                      largest creative community. Attach <br></br>
                      downloadable files directly to any <br></br>
                      Behance project, and set your own prices<br></br>
                      to earn money creating what you love.
                    </p>
                  </h6>
                  <PopoverFooter>Sell your assests on Modesen</PopoverFooter>
                </PopoverContent>
              </Popover>
              {!isAuth && (
                <>
                  <RouterLink to="/signup">
                    <Button
                      bg={"gray.700"}
                      color={"white"}
                      marginRight={"15px"}
                      marginLeft={"15px"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Signup
                    </Button>
                  </RouterLink>
                  <RouterLink to="/login">
                    <Button
                      bg={"gray.700"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Login
                    </Button>
                  </RouterLink>
                </>
              )}

              {/* <Image ml="30px" src="https://cdn.modesens.com/static/img/20210601heart.svg"/> */}

              <icon >
                <PiHeartFill className="wishlist" />
              </icon>
              <icon>
              <PiBagSimpleFill className="bag"/>
              </icon>
              {/* <Image
                ml="30px"
                src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
              /> */}

              <Image ml="30px" src="" />

              {/* 
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton> */}
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink>WOMEN</NavLink>
              <NavLink>MEN</NavLink>
              <NavLink>BEAUTY</NavLink>
              <NavLink>KIDS</NavLink>
              <NavLink>HOME</NavLink>
              <NavLink>DESIGNERS</NavLink>
              <NavLink>COMMUNITY</NavLink>
              <NavLink>SALE</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
