import styled from "styled-components";

const PageIndicator = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  background: ${(props) => {
    if (props.$currentPage === 1) {
      return props.$isActive ? "#000000" : "rgba(0, 0, 0, 0.16)";
    } else {
      return props.$isActive ? "#f7f7f7" : "rgba(255, 255, 255, 0.16)";
    }
  }};
  &:last-child {
    margin-right: 0;
  }
`;

const PageDot = ({ currentPage }) => {
  return (
    <PageIndicator>
      {[1, 2, 3, 4].map((page) => (
        <Dot
          key={page}
          $isActive={currentPage === page}
          $currentPage={currentPage}
        />
      ))}
    </PageIndicator>
  );
};

export default PageDot;
