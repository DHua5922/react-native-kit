import React, { ForwardedRef, forwardRef } from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import TextInput from "./TextInput";
import { rem } from "../utilities/responsive";
import { Pressable } from "react-native";
import styled from "styled-components/native";

interface Props {
  onChangeText?: (text: string) => void;
  onChange?: (text: string) => void;
  value?: string;
  [key: string]: any;
}

const SearchIcon = styled(FontAwesome5)`
  margin-left: 8px;
`;

const ClearIcon = styled(MaterialIcons)`
  margin-right: 8px;
`;

const iconProps = {
  size: rem(1.25),
  color: "#000000",
};

function SearchInput(
  { onChangeText, onChange, ...props }: Props,
  ref: ForwardedRef<any>
) {
  return (
    <TextInput
      ref={ref}
      leftChildren={<SearchIcon name="search" {...iconProps} />}
      rightChildren={
        props.value ? (
          <Pressable
            onPress={() => {
              onChangeText && onChangeText("");
              onChange && onChange("");
            }}
          >
            <ClearIcon name="clear" {...iconProps} />
          </Pressable>
        ) : null
      }
      {...props}
      onChangeText={(text: string) => {
        onChangeText && onChangeText(text);
        onChange && onChange(text);
      }}
    />
  );
}

export default forwardRef(SearchInput);
