import CardParent from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardSubtitle from "./CardSubtitle";
import CardTitle from "./CardTitle";

interface Card extends React.FC<any> {
  Body: typeof CardBody;
  Header: typeof CardHeader;
  Subtitle: typeof CardSubtitle;
  Title: typeof CardTitle;
}

const Card = CardParent as unknown as Card;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Header = CardHeader;

export default Card;
