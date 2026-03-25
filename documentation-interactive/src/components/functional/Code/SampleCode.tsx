import { Card } from "react-native-kit";
import { themes } from "prism-react-renderer";
import { LiveEditor, LiveProvider } from "react-live";
import styled from "styled-components/native";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const EditorContainer = styled(Card)`
  margin: 0px 2px;
  border-radius: 2px;
  box-shadow: 0px 0px 2px grey;
`;

function SampleCode({ children = "", ...props }: Props) {
  return (
    <LiveProvider code={`${children}`.trim()} theme={themes.github} {...props}>
      <EditorContainer>
        <LiveEditor disabled />
      </EditorContainer>
    </LiveProvider>
  );
}

export default SampleCode;
