import { styled } from "@linaria/react";
import VacabularyCard from "@/components/VacabularyCard";
import vacabularies from "@/apis/vacabularies.json";
import { useDispatch, useSelector } from "react-redux";
import { setInitialShowTitle, setInitialShowTrans } from "@/store/slice/common";
import { RootState } from "@/store";
import { useState } from "react";
import { getShuffleArray } from "@/utils/array";

export type Vacabulary = {
  title: string;
  group: string;
  trans: string;
};

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  gap: 12px;
`;

const Controller = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
  background-color: #d4d4ed;
  margin-bottom: 12px;
`;

const Button = styled.button`
  border-radius: 9999px;
  background-color: #3c6367;
  color: white;
  padding: 4px 12px;
`;

function Home() {
  const dispatch = useDispatch();
  const initialShowTitle = useSelector((state: RootState) => state.common.initialShowTitle);
  const initialShowTrans = useSelector((state: RootState) => state.common.initialShowTrans);
  const [vacabus, setVacabus] = useState<Vacabulary[]>(vacabularies);

  function toggleAllTitle() {
    dispatch(setInitialShowTitle(!initialShowTitle));
  }

  function toggleAllTrans() {
    dispatch(setInitialShowTrans(!initialShowTrans));
  }

  function shuffleVacabus() {
    setVacabus((prev) => {
      const newVac = getShuffleArray(prev);
      return newVac;
    });
  }

  return (
    <div className="home">
      <Controller>
        <Button onClick={shuffleVacabus}>Shuffle</Button>
        <Button onClick={toggleAllTitle}>Title</Button>
        <Button onClick={toggleAllTrans}>Trans</Button>
      </Controller>
      <Panel>
        {vacabus.map((vac) => (
          <VacabularyCard data={vac} key={vac.title} />
        ))}
      </Panel>
    </div>
  );
}

export default Home;
