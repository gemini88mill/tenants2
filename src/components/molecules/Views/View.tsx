import { Slide } from "@mui/material";
import { ComponentType } from "react";

type ViewProps = {
  Contents: ComponentType;
  isVisible: boolean;
};

export const View = ({Contents, isVisible}: ViewProps) => {
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Contents />
    </Slide>
  );
}