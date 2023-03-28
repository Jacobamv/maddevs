import { Icon, Text } from "components/elements";
import ya from "assets/images/ya.png";
import azim from "assets/images/azim.png";
import jacob from "assets/images/jacob.png";
import artem from "assets/images/artem.png";
import "./Icons.scss";

function Icons() {
  const iconsList = [
    { icon: ya, text: "Marketing" },
    { icon: azim, text: "Management" },
    { icon: artem, text: "Financial" },
    { icon: jacob, text: "Business AD" },
  ];
  const iconComponents = iconsList.map((icon) => (
    <Icon>
      <img src={icon.icon} alt='Icon' />
      <Text>{icon.text}</Text>
    </Icon>
  ));

  return <div className='modules__icons'>{iconComponents}</div>;
}

export default Icons;
