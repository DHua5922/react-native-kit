jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const { Text } = require("react-native");

  const createIcon = (displayName: string) => {
    const Icon = ({ name, ...props }: any) => (
      <Text {...props}>{name || displayName}</Text>
    );

    Icon.displayName = displayName;
    return Icon;
  };

  return {
    AntDesign: createIcon("AntDesign"),
    Entypo: createIcon("Entypo"),
    Feather: createIcon("Feather"),
    FontAwesome: createIcon("FontAwesome"),
    FontAwesome5: createIcon("FontAwesome5"),
    MaterialIcons: createIcon("MaterialIcons"),
  };
});

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

const { Animated } = require("react-native");

jest.spyOn(Animated, "timing").mockImplementation((value: any, config: any) => ({
  start: (callback?: () => void) => {
    if (typeof value?.setValue === "function") {
      value.setValue(config.toValue);
    }

    callback?.();
  },
  stop: jest.fn(),
  reset: jest.fn(),
}));
