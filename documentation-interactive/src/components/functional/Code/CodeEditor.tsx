import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components/native";
import { themes } from "prism-react-renderer";
import { Card } from "react-native-kit";
import React from "react";

interface Props {
  children: string;
  [key: string]: any;
}

const BoxPreview = styled.View`
  border: 1px solid black;
  padding: 16px;
`;

const EditorContainer = styled(Card)`
  margin: 0px 2px;
  border-radius: 2px;
  box-shadow: 0px 0px 2px grey;
`;

function CodeEditor({ children, ...props }: Props) {
  return (
    <LiveProvider theme={themes.github} code={children.trim()} {...props}>
      <BoxPreview>
        <LivePreview />
      </BoxPreview>

      <EditorContainer>
        <LiveEditor />
        <LiveError />
      </EditorContainer>
    </LiveProvider>
  );
}

export default CodeEditor;
