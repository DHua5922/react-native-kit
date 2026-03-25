import { useWindowDimensions } from "react-native";

function useResponsiveUnits() {
  const { width, height } = useWindowDimensions();

  function vw(value: number) {
    return (width * value) / 100;
  }

  function vh(value: number) {
    return (height * value) / 100;
  }

  return { vw, vh };
}

function rem(value: number, baseFontSize = 16) {
  return baseFontSize * value;
}

export { useResponsiveUnits, rem };
