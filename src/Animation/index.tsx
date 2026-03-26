import AnimationParent from "./Animation";
import FadeInAnimation from "./FadeInAnimation";
import createCompoundComponent from "../internal/createCompoundComponent";

const Animation = createCompoundComponent(AnimationParent, {
  FadeIn: FadeInAnimation,
});

export default Animation;
