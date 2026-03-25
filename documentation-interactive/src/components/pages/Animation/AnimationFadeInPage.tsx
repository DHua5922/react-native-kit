import { Link as CnLink, Animation } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
  const animationConfig = {
    duration: 2000,
    useNativeDriver: true,
    toValue: 1
  };

  return (
    <Animation.FadeIn config={animationConfig}>
        Fade In Animation
    </Animation.FadeIn>
  );
}`;

function AnimationFadeInPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.AnimationFadeIn} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Animation } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Animation }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "config",
            "object",
            "{}",
            <CnLink link="https://reactnative.dev/docs/animated#timing">
              Configuration object for Animated.timing()
            </CnLink>,
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="animatedView" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default AnimationFadeInPage;
