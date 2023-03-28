import { Button, Header, Link, Text } from "components/elements";
import Sticky from "../Sticky";
import "./ProblemDefinition.scss";

function ProblemDefinition() {
  return (
    <>
      <Sticky isNav={false}>MadDevs</Sticky>
      <div className='modules__problem-definition'>
        {/* video */}
        <Header>Problem: The Digital Divide</Header>
        <Text>
          The digital divide is a global problem that refers to the unequal
          access to digital resources, such as the internet, computers, and
          other technologies, among different socioeconomic groups. This divide
          exacerbates existing social, economic, and educational disparities,
          leading to a vicious cycle of inequality. Bridging the digital divide
          is crucial for promoting social equity, economic development, and
          global competitiveness.
        </Text>
        <Link
          styles={{
            color: "white",
            textDecoration: "none",
          }}
          to='/problem-resolution'
        >
          <Button>Next</Button>{" "}
        </Link>
      </div>
    </>
  );
}

export default ProblemDefinition;
