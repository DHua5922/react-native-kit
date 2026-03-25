import styled from "styled-components/native";
import React from "react";
import Div from "./Div";
import { useWindowDimensions } from "react-native";

interface Props {
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  [key: string]: any;
}

interface ContainerProps {
  width: number;
}

const Container = styled(Div)<ContainerProps>`
  width: ${(props: ContainerProps) => props.width}%;
`;

function Col({ children, xs, sm, md, lg, xl, xxl, ...props }: Props) {
  const dimensions = useWindowDimensions();

  let width;
  if (dimensions.width >= 1400 && xxl) width = (xxl / 12) * 100;
  else if (dimensions.width >= 1200 && xl) width = (xl / 12) * 100;
  else if (dimensions.width >= 992 && lg) width = (lg / 12) * 100;
  else if (dimensions.width >= 768 && md) width = (md / 12) * 100;
  else if (dimensions.width >= 576 && sm) width = (sm / 12) * 100;
  else width = ((xs || 12) / 12) * 100;

  return (
    <Container width={width} {...props}>
      {children}
    </Container>
  );
}

export default Col;
