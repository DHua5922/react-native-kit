import { Link as CnLink, Div } from "react-native-kit";
import { useNavigation } from "@react-navigation/native";
import { links, pageNames } from "../../constants";
import React from "react";
import { Pressable } from "react-native";

interface Props {
  children?: React.ReactNode;
  component?: string;
  link?: string;
  [key: string]: any;
}

interface ComponentLink {
  [key: string]: { link: string; children: string };
}

function Link({ component = "", ...props }: Props) {
  const navigation = useNavigation();

  const componentLinks: ComponentLink = {
    div: {
      link: pageNames.Div,
      children: pageNames.Div,
    },
    view: {
      link: links.view,
      children: "View",
    },
    text: {
      link: links.text,
      children: "Text",
    },
    textCN: {
      link: pageNames.Text,
      children: "Text",
    },
    row: {
      link: pageNames.Row,
      children: pageNames.Row,
    },
    animatedView: {
      link: links.animatedView,
      children: "Animated.View",
    },
    pressable: {
      link: links.pressable,
      children: "Pressable",
    },
    td: {
      link: pageNames.TableTd,
      children: pageNames.TableTd,
    },
    textInput: {
      link: links.textInput,
      children: "TextInput",
    },
    textInputCN: {
      link: pageNames.InputText,
      children: pageNames.InputText,
    },
    input: {
      link: pageNames.Input,
      children: pageNames.Input,
    },
    button: {
      link: pageNames.Button,
      children: pageNames.Button,
    },
    buttonClose: {
      link: pageNames.CloseButton,
      children: "Button.Close",
    },
    modal: {
      link: links.modal,
      children: "Modal",
    },
    expoIcons: {
      link: links.expoIcons,
      children: "Expo Icons",
    },
  };

  const link = props.link || componentLinks[component].link;
  const children = props.children || componentLinks[component].children;

  return link.startsWith("http") || link.startsWith("www.") ? (
    <CnLink {...props} link={link}>
      {children}
    </CnLink>
  ) : (
    <Pressable onPress={() => navigation.navigate(link as never)}>
      <Div underline {...props}>
        {children}
      </Div>
    </Pressable>
  );
}

export default Link;
