import link1 from "assets/images/link1.png";
import link2 from "assets/images/link2.png";
import link3 from "assets/images/link3.png";
import link4 from "assets/images/link4.png";
import ya from "assets/images/ya.png";
import azim from "assets/images/azim.png";
import jacob from "assets/images/jacob.png";
import artem from "assets/images/artem.png";
import {
  Link,
  PersonalLinkElement,
  PersonalLinkFooter,
} from "components/elements";
import "./PersonalLink.scss";

function PersonalLink() {
  const linksArr = [
    { text: "Marketing", image: ya, linkImage: link1, link: "marketing" },
    { text: "Business AD", image: jacob, linkImage: link2, link: "business" },
    { text: "Management", image: azim, linkImage: link3, link: "management" },
    { text: "Financial", image: artem, linkImage: link4, link: "finance" },
  ];

  const links = linksArr.map((linkName) => {
    const { image, linkImage, text, link } = linkName;

    return (
      <div key={text}>
        <Link to={`/${link}`}>
          <PersonalLinkElement linkImage={linkImage} />
          <PersonalLinkFooter image={image} text={text} />
        </Link>
      </div>
    );
  });

  return <div className='modules__personal-link'>{links}</div>;
}

export default PersonalLink;
