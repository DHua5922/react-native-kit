import { Button, Center, Div, Row, rem } from "react-native-kit";
import Page from "../functional/Page";
import React from "react";
import styled from "styled-components/native";
import Gap from "../functional/Gap";
import { useNavigation } from "@react-navigation/native";
import Logo from "../functional/Logo";
import { packageName, pageNames } from "../../constants";

const PackageName = styled(Div)`
  font-size: ${rem(2.75)}px;
  font-weight: bold;
`;

const PackageDescription = styled(Div)`
  font-size: ${rem(1.25)}px;
  font-weight: 700;
`;

const Container = styled(Center)`
  height: 90%;
`;

function HomePage() {
  const navigation = useNavigation();

  return (
    <Page>
      <Container>
        <Center>
          <Logo />
        </Center>

        <Gap />

        <Center>
          <PackageName>{packageName}</PackageName>
        </Center>

        <Gap />

        <Center>
          <PackageDescription>
            A React Native component library for making cross-platform
            applications.
          </PackageDescription>
        </Center>

        <Gap />

        <Center>
          <Row>
            <Button
              onPress={() =>
                navigation.navigate(pageNames.Installation as never)
              }
            >
              Get Started
            </Button>

            <Gap />

            <Button
              onPress={() => navigation.navigate(pageNames.Accordion as never)}
            >
              Components
            </Button>
          </Row>
        </Center>
      </Container>
    </Page>
  );
}

export default HomePage;
