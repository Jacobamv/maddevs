import { Icon, Text } from "components/elements";
import ya from "assets/images/ya.png";
import azim from "assets/images/azim.png";
import jacob from "assets/images/jacob.png";
import artem from "assets/images/artem.png";
import "./Icons.scss";
import { useAppDispatch } from "store/hooks/redux.hooks";
import { ModalActions } from "store/modal/ActionCreators";

function Icons() {
  const dispatch = useAppDispatch();

  const personList = [
    {
      icon: ya,
      text: "Marketing",
      description: "Head of Marketing",
      qualities: ["Persuasive", "Creative", "Strategic"],
      name: "Nikita Lafinskyi",
      color: "#E0CBF2",
    },
    {
      icon: azim,
      text: "Management",
      description: "Head of Management",
      qualities: ["Decisive", "Collaborative", "Visionary"],
      name: "Azim Arifdzhanov",
      color: "#D6E4A7",
    },
    {
      icon: artem,
      text: "Financial",
      description: "Head of Finance",
      qualities: ["Analytical", "Detail-oriented", "Strategic"],
      name: "Artem lunakov-Dergachov",
      color: "#B0C8E4",
    },
    {
      icon: jacob,
      text: "Business AD",
      description: "Head of Business AD",
      qualities: ["Organized", "Resourceful", "Adaptable"],
      name: "Yaqub Akhmedov",
      color: "#B6B8E7",
    },
  ];
  const iconComponents = personList.map((person) => {
    const { icon, text, description, qualities, name, color } = person;
    return (
      <Icon key={color}>
        <img
          onClick={() => {
            dispatch(
              ModalActions.enableModal({
                image: icon,
                description,
                qualities,
                name,
                color,
              })
            );
          }}
          src={icon}
          alt='Icon'
        />
        <Text>{text}</Text>
      </Icon>
    );
  });

  return <div className='modules__icons'>{iconComponents}</div>;
}

export default Icons;
