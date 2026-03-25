import React from "react";
import Page from "../functional/Page";
import Documentation from "../functional/Documentation";
import Code from "../functional/Code";
import { packageName, pageNames } from "../../constants";
import {
  rem,
  Div,
  Text,
  useResponsiveUnits,
  Table,
  Center,
} from "react-native-kit";
import Gap from "../functional/Gap";

const code = `function Example() {
    const { vw, vh } = useResponsiveUnits();
    return (
        <Div>
            <Div><Text bold>vw:</Text> {vw(1)}</Div>
            <Div><Text bold>vh:</Text> {vh(1)}</Div>
            <Div><Text bold>rem:</Text> {rem(1)}</Div>
        </Div>
    );
}`;

function ResponsivePage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Responsive}>
        Make your app responsive to different screen sizes.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { rem, useResponsiveUnits } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Responsive Units">
        Use <Text bold>vw</Text>, <Text bold>vh</Text>, and{" "}
        <Text bold>rem</Text> to make your app responsive to different screen
        sizes. You can try out the example below by resizing your window.
        <Gap />
        <Table>
          <Table.tr>
            {["vw", "vh", "rem"].map((unit: string) => (
              <Table.th>
                <Center bold>{unit}</Center>
              </Table.th>
            ))}
          </Table.tr>

          <Table.tr>
            <Table.td>
              <Div>
                Stands for viewport width. Value changes as window width is
                being resized.
                <Gap />
                <Code.Sample>{`vw(value: number): number`}</Code.Sample>
              </Div>
            </Table.td>
            <Table.td>
              <Div>
                Stands for viewport height. Value changes as window height is
                being resized.
                <Gap />
                <Code.Sample>{`vh(value: number): number`}</Code.Sample>
              </Div>
            </Table.td>
            <Table.td>
              <Div>
                Allows you to size elements (such as text, padding, margins,
                etc.) relative to the root element's font size, instead of the
                element's own font size. This makes it easier to maintain
                consistent scaling throughout a web page.
                <Gap />
                <Code.Sample>{`rem(value: number, baseFontSize = 16): number`}</Code.Sample>
              </Div>
            </Table.td>
          </Table.tr>
        </Table>
      </Documentation.Section>

      <Documentation.Section subtitle="Example">
        <Code.Editor scope={{ rem, useResponsiveUnits, Div, Text }}>
          {code}
        </Code.Editor>
      </Documentation.Section>
    </Page.Documentation>
  );
}

export default ResponsivePage;
