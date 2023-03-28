import Modal from "components/elements/Modal";
import { TeamDisplay as TeamDisplayTemplate } from "components/templates";

function TeamDisplay() {
  return (
    <>
      <div>
        <TeamDisplayTemplate />
      </div>
      <Modal />
    </>
  );
}

export default TeamDisplay;
