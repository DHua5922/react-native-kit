import { Div } from "react-native-kit";
import Page from "./Page";
import styled from "styled-components/native";
import React from "react";
import { ScrollView } from "react-native";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Content = styled(Div)`
  max-width: 80%;
  width: 100%;
  margin: 0px auto;
  padding: 12px 0px;
`;

function DocumentationPage({ children, ...props }: Props) {
  return (
    <Page {...props}>
      <ScrollView>
        <Content>{children}</Content>
      </ScrollView>
    </Page>
  );
}

export default DocumentationPage;
