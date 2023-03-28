import link1 from "assets/images/link1.png";
import link2 from "assets/images/link2.png";
import link3 from "assets/images/link3.png";
import link4 from "assets/images/link4.png";
import ya from "assets/images/ya.png";
import azim from "assets/images/azim.png";
import jacob from "assets/images/jacob.png";
import artem from "assets/images/artem.png";
import { PersonalLinkElement, PersonalLinkFooter } from "components/elements";

function PersonalLink() {
  const linksArr = [
    { text: "Marketing", image: ya, linkImage: link1 },
    { text: "Business AD", image: jacob, linkImage: link2 },
    { text: "Management", image: azim, linkImage: link3 },
    { text: "Financial", image: artem, linkImage: link4 },
  ];

  const links = linksArr.map((link) => {
    const { image, linkImage, text } = link;

    return (
      <div>
        <PersonalLinkElement linkImage={linkImage} />
        <PersonalLinkFooter image={image} text={text} />
      </div>
    );
  });

  return <div></div>;
}

export default PersonalLink;
