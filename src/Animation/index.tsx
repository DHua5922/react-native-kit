import AnimationParent from "./Animation";
import FadeInAnimation from "./FadeInAnimation";

interface Animation extends React.FC<any> {
  FadeIn: typeof FadeInAnimation;
}

const Animation = AnimationParent as Animation;
Animation.FadeIn = FadeInAnimation;

export default Animation;
