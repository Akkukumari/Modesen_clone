import { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             

<NavLink >WOMEN</NavLink>
<NavLink >MEN</NavLink>
<NavLink >BEAUTY</NavLink>
<NavLink >KIDS</NavLink>
<NavLink >HOME</NavLink>
<NavLink >DESIGNERS</NavLink>
<NavLink >COMMUNITY</NavLink>
<NavLink>SALE</NavLink>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                  <Image src="https://cdn.modesens.com/static/img/prd-update-20191109.svg"/>

                <Avatar
                  size={'sm'}
                  src={'data:image/png;base64,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'}
                />
              </MenuButton>
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
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <NavLink >WOMEN</NavLink>
            <NavLink >MEN</NavLink>
            <NavLink >BEAUTY</NavLink>
            <NavLink >KIDS</NavLink>
            <NavLink >HOME</NavLink>
            <NavLink >DESIGNERS</NavLink>
            <NavLink >COMMUNITY</NavLink>
            <NavLink>SALE</NavLink>  
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}