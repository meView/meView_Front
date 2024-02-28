import BodyHeader from "../../components/meview/capability/BodyHeader";
import BodyCharacter from "../../components/meview/capability/BodyCharacter";

import BodySelect from "../../components/meview/capability/BodySelect";

import TopNav from "../../components/meview/capability/TopNav";
import ViewNav from "../../components/meview/capability/ViewNav";

function MeviewStrength() {
  return (
    <>
      <TopNav />
      <ViewNav />
      <BodyHeader />
      <BodyCharacter />
    </>
  );
}
export default MeviewStrength;
