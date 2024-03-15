import ProjectBody from "../../components/meview/project/ProjectBody";
import ProjectSelector from "../../components/meview/project/ProjectSellector";
import ProjectreviewHead from "../../components/meview/project/ProjectreviewHead";
function MeviewProjectReview() {
  return (
    <div>
      <ProjectreviewHead />
      <ProjectSelector />
      <ProjectBody />
    </div>
  );
}

export default MeviewProjectReview;
