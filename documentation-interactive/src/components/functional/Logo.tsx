import { useResponsiveUnits } from "react-native-kit";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable } from "react-native";
import { pageNames } from "../../constants";
import styled from "styled-components/native";
import React from "react";

interface Props {
  onPress?: () => void;
  [key: string]: any;
}

interface ImageProps {
  width: string;
  height: string;
}

const SImage = styled(Image)<ImageProps>`
  width: ${(props: ImageProps) => props.width};
  height: ${(props: ImageProps) => props.height};
`;

function Logo({ onPress, ...props }: Props) {
  const navigation = useNavigation();
  const { vw, vh } = useResponsiveUnits();
  return (
    <Pressable
      onPress={() =>
        onPress ? onPress() : navigation.navigate(pageNames.Home as never)
      }
    >
      <SImage
        alt=""
        source={require("../../../assets/favicon.png")}
        width={`${vw(10)}px`}
        height={`${vh(15)}px`}
        {...props}
      />
    </Pressable>
  );
}

export default Logo;
