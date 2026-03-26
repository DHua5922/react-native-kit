import CardParent from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardSubtitle from "./CardSubtitle";
import CardTitle from "./CardTitle";
import createCompoundComponent from "../internal/createCompoundComponent";

const Card = createCompoundComponent(CardParent, {
  Body: CardBody,
  Header: CardHeader,
  Subtitle: CardSubtitle,
  Title: CardTitle,
});

export default Card;
