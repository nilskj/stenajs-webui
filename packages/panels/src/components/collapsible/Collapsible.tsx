import styled from "@emotion/styled";
import { Box } from "@stenajs-webui/core";
import * as React from "react";

export interface CollapsibleProps {
  isOpen: boolean;
  trigger: React.ReactNode;
}

const StyledCollapsible = styled("div")<Pick<CollapsibleProps, "isOpen">>`
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: all 0.6s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  isOpen,
  trigger
}) => {
  return (
    <Box flexDirection={"column"}>
      {trigger}
      <StyledCollapsible isOpen={isOpen}>{children}</StyledCollapsible>
    </Box>
  );
};
