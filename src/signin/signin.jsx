import React, { useEffect, useState } from "react";
import "./signinTemplate.css";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { isVisible } from "@testing-library/user-event/dist/utils";

function Signin() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isHidden, setIsHidden] = useState(true);
  const [msg1, setMsg1] = useState("Welcome back!");
  const [msg2, setMsg2] = useState("Sign In!");
  const [msg3, setMsg3] = useState("Sign In");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  if (localStorage.getItem("token") !== null) {
    navigate("/");
  }
  const showElements = () => {
    console.log("was here");
    setIsHidden(false);
    setMsg1("Please create an account to proceed.");
    setMsg2("Create Account");
    setMsg3("Create Account");
  };

  const hideElements = () => {
    setIsHidden(true);
    setMsg1("Welcome back!");
    setMsg2("Sign In!");
    setMsg3("Sign In");
  };

  const signinProc = async () => {
    console.log(isHidden);
    if (isHidden) {
      try {
        const response = await fetch(`http://localhost:8009/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            pass,
          }),
        });
        if (response.ok) {
          const res = await response.json();
          console.log(res);
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("userID", email);
          alert(res.msg);
        } else {
          const err = await response.json();
          throw new Error(err);
        }
      } catch (error) {
        alert(error.msg);
      }
      navigate("/cart");
    } else {
      try {
        console.log(1);
        const obj = {
          name: name,
          email: email,
          pass: pass,
        };
        console.log(obj);
        const response = await fetch(`http://localhost:8009/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        console.log(response);
        if (response.ok) {
          const res = await response.json();
          console.log(res);
          alert(res.msg);
        } else {
          const err = await response.json();
          throw new Error(err);
        }
      } catch (error) {
        alert(error.msg);
      }
      window.location.reload();
    }
  };
  return (
    <div id="container">
      <div id="signinbody">
        <div id="box-container">
          <div id="left-box">
            <img src="/go-flowers.png" alt="Logo" id="logo" />
            <h5>{msg1}</h5>
            <img
              src="https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/Auth0/celebrations_family_of_brands.png"
              alt="Logo"
            />
          </div>
          <div id="right-box">
            <div>
              <h1>{msg2}</h1>
              {!isHidden ? null : (
                <div id="regLabel">
                  <p>Not registered?</p>
                  <a onClick={showElements}>Create Account</a>
                </div>
              )}
            </div>
            <div>
              <FormControl>
                {isHidden ? null : (
                  <div>
                    <FormLabel mb="0">Name</FormLabel>
                    <Input
                      type="text"
                      display="hidden"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                )}
                <FormLabel mb="0">Email</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <FormLabel mb="0">Pasword</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />

                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box bg="white" w="100%" p={1} color="white"></Box>
                <WrapItem>
                  <Button
                    colorScheme="purple"
                    w="100%"
                    borderRadius="2pt"
                    h="2rem"
                    onClick={signinProc}
                  >
                    {msg3}
                  </Button>
                </WrapItem>

                <p id="terms">
                  By continuing, you agree to our Terms of Use and Privacy
                  Notice.
                </p>

                {isHidden ? null : (
                  <div>
                    <Box bg="white" w="100%" p={3} color="white"></Box>
                    <WrapItem>
                      <Button
                        colorScheme="blackAlpha"
                        w="100%"
                        borderRadius="2pt"
                        h="2rem"
                        onClick={hideElements}
                      >
                        Sign In
                      </Button>
                    </WrapItem>
                  </div>
                )}
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
