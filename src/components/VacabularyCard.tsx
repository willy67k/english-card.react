import { RootState } from "@/store";
import { styled } from "@linaria/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export type VacabularyCardProps = {
  data: {
    title: string;
    group: string;
    trans: string;
  };
};

const Card = styled.div`
  border-radius: 18px;
  background-color: #d4d4ed;
  padding: 18px 16px;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
const Title = styled.p`
  width: fit-content;
  font-size: 28px;
  font-weight: bold;
  color: #111121;
  line-height: 1;
  margin-bottom: 8px;
  transition: 0.3s background-color;

  &.marked {
    background-color: #111121;
  }
`;
const Group = styled.p`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: #9a9dae;
  margin-bottom: 8px;
`;
const Trans = styled.p`
  width: fit-content;
  font-size: 16px;
  color: #636177;
  transition: 0.3s background-color;

  &.marked {
    background-color: #636177;
  }
`;

function VacabularyCard(props: VacabularyCardProps) {
  const { title, group, trans } = props.data;
  const initialShowTitle = useSelector((state: RootState) => state.common.initialShowTitle);
  const initialShowTrans = useSelector((state: RootState) => state.common.initialShowTrans);

  const [showTitle, setShowTitle] = useState(true);
  const [showTrans, setShowTrans] = useState(true);

  useEffect(() => {
    setShowTitle(initialShowTitle);
  }, [initialShowTitle]);

  useEffect(() => {
    setShowTrans(initialShowTrans);
  }, [initialShowTrans]);

  return (
    <Card>
      <Title onClick={() => setShowTitle((prev) => !prev)} className={`${showTitle ? "" : "marked"}`}>
        {title}
      </Title>
      <Group>{group}</Group>
      <Trans onClick={() => setShowTrans((prev) => !prev)} className={`${showTrans ? "" : "marked"}`}>
        {trans}
      </Trans>
    </Card>
  );
}
export default VacabularyCard;
