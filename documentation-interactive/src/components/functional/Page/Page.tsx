import {
  Button,
  Drawer,
  Accordion,
  Div,
  Row,
  Link,
  rem,
  useResponsiveUnits,
} from "react-native-kit";
import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView } from "react-native";
import Logo from "../Logo";
import { links, packageName, pageNames } from "../../../constants";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

interface ContainerProps {
  height: number;
}

const Container = styled(Div)<ContainerProps>`
  background-color: #ffffff;
  height: ${(props: ContainerProps) => props.height}px;
`;

const NavbarParent = styled(Div)`
  box-shadow: 10px 5px 5px #f4f4f4;
  padding: 8px 20px;
`;
const NavbarRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;
const NavbarPackageName = styled(Div)`
  font-weight: bold;
`;
const Navbar = Object.assign(NavbarParent, {
  Row: NavbarRow,
  PackageName: NavbarPackageName,
});

const CompanyLogo = styled(Logo)`
  margin-left: 20px;
`;

const SubButton = styled(Button)`
  margin-left: ${rem(1)}px;
`;

function Page({ children, ...props }: Props) {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const { vh, vw } = useResponsiveUnits();

  const componentList = Object.values(pageNames)
    .filter(
      (pageName) =>
        pageName !== pageNames.Home &&
        pageName !== pageNames.Installation &&
        pageName !== pageNames.Responsive,
    )
    .sort();

  function onPressLink(page: string) {
    return () => {
      navigation.navigate(page as never);
      setShow(false);
    };
  }

  return (
    <Container height={vh(100)} {...props}>
      <Navbar>
        <Navbar.Row>
          <Navbar.Row>
            <Drawer.Toggle onPress={() => setShow(true)} />

            <Pressable
              onPress={() => navigation.navigate(pageNames.Home as never)}
            >
              <Navbar.Row>
                <CompanyLogo width={`${vw(4)}px`} height={`${vh(6)}px`} />
                <Navbar.PackageName>{packageName}</Navbar.PackageName>
              </Navbar.Row>
            </Pressable>
          </Navbar.Row>

          <Link link={links.github}>GitHub</Link>
        </Navbar.Row>
      </Navbar>

      <Drawer show={show} onHide={() => setShow(false)}>
        <Drawer.Header closeButton />

        <ScrollView>
          <Drawer.Body>
            {[
              { label: "Overview", page: pageNames.Home },
              { label: pageNames.Installation, page: pageNames.Installation },
              { label: pageNames.Responsive, page: pageNames.Responsive },
            ].map((item, index) => (
              <Button
                type="transparent"
                key={index}
                onPress={onPressLink(item.page)}
              >
                {item.label}
              </Button>
            ))}

            <Accordion activeKeys={["1"]}>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Components</Accordion.Header>
                <Accordion.Body>
                  {componentList
                    .reduce(
                      (
                        componentSidebarList: {
                          label: string;
                          subcomponents: string[];
                        }[],
                        componentName,
                      ) => {
                        const notFoundIndex = -1;

                        if (componentName.indexOf(".") === notFoundIndex) {
                          componentSidebarList.push({
                            label: componentName,
                            subcomponents: componentList.filter(
                              (component) =>
                                component.indexOf(`${componentName}.`) >
                                notFoundIndex,
                            ),
                          });
                        }

                        return componentSidebarList;
                      },
                      [],
                    )
                    .map((item, index) => (
                      <Div key={index}>
                        <Button
                          type="transparent"
                          onPress={onPressLink(item.label)}
                        >
                          {item.label}
                        </Button>

                        {item.subcomponents.map((component, index) => (
                          <SubButton
                            type="transparent"
                            key={index}
                            onPress={onPressLink(component)}
                          >
                            {component}
                          </SubButton>
                        ))}
                      </Div>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Drawer.Body>
        </ScrollView>
      </Drawer>
      {children}
    </Container>
  );
}

export default Page;
