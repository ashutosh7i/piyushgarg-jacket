import { VStack, HStack, Text, Button } from "@chakra-ui/react";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { css } from "@emotion/react";

const buttonStyles = css`
  &:hover {
    background-color: transparent;
    color: white;
  }
`;

function NavBar() {
  return (
    <nav className="hidden lg:flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Piyush Garg
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow"></div>
        <Button
          color="white"
          variant="ghost"
          onClick={() => window.open("https://www.piyushgarg.dev/", "_blank")}
          css={buttonStyles}
        >
          {"Know Piyush "} <MdArrowOutward />
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
