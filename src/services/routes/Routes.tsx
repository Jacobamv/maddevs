import { Routes as Switch, Route } from "react-router-dom";
import { BusinessADPage, IntroPage, MarketingPage, ProblemDefinition, TeamDisplay } from "pages";
import { FinancialPlan, ProblemResolution, Sticky } from "components/modules";
import { Button, Header, Link, Text } from "components/elements";
import ReactPlayer from "react-player";

function Management() {
  return (
    <>
      <Sticky isNav={false}>MadDevs</Sticky>
      <div className='modules__problem-definition'>
        <ReactPlayer url='/video1.MP4' />
        <Header>Management plan</Header>
        <Text>
          A company plans to bridge the digital divide by providing affordable
          internet access, digital devices, and digital literacy programs to
          underserved communities worldwide while securing funding through
          grants, partnerships, and investments, setting realistic milestones
          and deadlines, maintaining transparent communication with
          stakeholders, and identifying potential challenges to mitigate risks.
        </Text>
        <Link
          styles={{
            color: "white",
            textDecoration: "none",
          }}
          to='/problem-resolution'
        >
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
}

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<IntroPage />} />
      <Route path='/team-display' element={<TeamDisplay />} />
      <Route path='/problem-definition' element={<ProblemDefinition />} />
      <Route path='/problem-resolution' element={<ProblemResolution />} />
      <Route path='/management' element={<Management />} />
      <Route path='/business' element={<BusinessADPage />} />
      <Route path='/finance' element={<FinancialPlan />} />
      <Route path='/marketing' element={<MarketingPage />} />
    </Switch>
  );
}
