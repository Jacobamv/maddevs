import { Button, Header, Link, Text } from "components/elements";
import ReactPlayer from "react-player";
import Sticky from "../Sticky";
import "./ProblemResolution.scss";

function ProblemResolution() {
  return (
    <>
      <Sticky isNav={false}>MadDevs</Sticky>
      <div className='modules__problem-resolution'>
        <ReactPlayer
          playing
          url='videos/2.MP4'
          width='100%'
          height='100%'
          controls={true}
        />{" "}
        <Header>Solution: ConnectEd</Header>
        <Text>
          ConnectEd is a social enterprise that aims to bridge the digital
          divide by providing affordable, high-quality internet access, digital
          devices, and digital literacy programs to underserved communities
          worldwide. Our unique, innovative solution combines technology,
          education, and community engagement, creating a sustainable and
          scalable model for closing the digital divide.
        </Text>{" "}
        <Link
          styles={{
            color: "white",
            textDecoration: "none",
          }}
          to='/team-display'
        >
          <Button>Next</Button>{" "}
        </Link>
      </div>
    </>
  );
}

export default ProblemResolution;
