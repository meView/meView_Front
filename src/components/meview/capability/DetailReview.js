import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedChipInfoState } from "../../../recoil/StrengthAtom";

function DetailReview() {
  const selectedChipInfo = useRecoilValue(selectedChipInfoState);

  return (
    <div>
      <span>{selectedChipInfo.name}</span>
      <span>{selectedChipInfo.strength}</span>
    </div>
  );
}

export default DetailReview;
