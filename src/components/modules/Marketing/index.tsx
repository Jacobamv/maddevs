import { Button, Header, Link, Text } from "components/elements";
import Sticky from "../Sticky";
import "./Marketing.scss";
import ReactPlayer from 'react-player'

function Marketing() {
  return (
    <>
      <Sticky isNav={false}>MadDevs</Sticky>
      <div className='modules__problem-resolution'>
        <ReactPlayer playing url='videos/5.MP4'
          width='100%'
          height='100%'
          controls={true}
        />
        <Header>Marketing plan</Header>
        <Text>
        Our aim is to bridge the digital divide in underserved communities by offering affordable internet access, digital devices, and literacy programs, using various marketing strategies to reach potential beneficiaries and partners, and measuring success through website traffic, leads, conversions, and customer feedback.
        </Text>
        <Link
          styles={{
            color: "white",
            textDecoration: "none",
          }}
          to='/team-display'
        >
        </Link>
      </div>
    </>
  );
}

export default Marketing;
