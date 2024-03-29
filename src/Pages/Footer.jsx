// import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import {
    FaCartPlus,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaUser,
    FaYoutube,
  } from "react-icons/fa";
// import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>CUSTOMER CARE</ListHeader>
            <Link href={'#'}>Shopper Protection</Link>
            <Link href={'#'}>Loyalty Program</Link>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Size Guides</Link>
            <Link href={'#'}>Contact Us / Feedback</Link>
            <Link href={'#'}>Shipping / Returns</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>INFORMATION</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Influencer Program</Link>
            <Link href={'#'}>Partner Stores</Link>
            <Link href={'#'}>Sitemap</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>LEGAL</ListHeader>
            <Link href={'#'}>Terms Of Use</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Disclosure</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CONNECT WITH US</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022,Shop ModeSens Inc</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}