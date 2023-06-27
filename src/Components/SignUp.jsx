import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const obj = {
      id: uuidv4(),
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    console.log(obj)
    console.log(".env",process.env.REACT_APP_JSON_SERVER_PORT )
    axios
      .post(
        // `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
        `https://warm-uneven-neighbor.glitch.me/users`,
        obj
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
  };


  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        className="login-body"
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create An Account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Unleash your shopping power.<br></br>
            Check ModeSens before you buy.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstname}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastname}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"gray.900"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => handleSubmit()}
              >
                Sign up
              </Button>
            </Stack>
            <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u onClick={Login}>Login here</u>
                        </a>
                      </p>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
