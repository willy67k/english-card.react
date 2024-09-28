import { styled } from "@linaria/react";
import vacabularies from "@/apis/vacabularies.json";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTimes } from "@/store/slice/filter";

type ModalProps = {
  show?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;

  &.show {
    display: block;
  }
`;

const Warpper = styled.div`
  width: 320px;
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  margin: auto;
  margin-top: 80px;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  //   overflow: scroll hidden;
`;

const Button = styled.button`
  border-radius: 9999px;
  background-color: white;
  border: 1px solid #3c6367;
  color: #3c6367;
  padding: 4px 12px;

  &.active {
    background-color: #3c6367;
    color: white;
  }
`;

function Modal(props: ModalProps) {
  const { show, setShow } = props;

  const dispatch = useDispatch();
  const currentTimes = useSelector((state: RootState) => state.filter.times);

  const times = useMemo(() => {
    const times: any = {};
    vacabularies.forEach((el) => {
      if (!times[el.time]) {
        times[el.time] = true;
      }
    });
    return Object.keys(times);
  }, []);

  function toggleTimes(val: string) {
    let newVal = currentTimes === "all" ? [...times] : [...currentTimes];
    if (newVal.find((el) => el === val)) {
      newVal = newVal.filter((el) => el !== val);
    } else {
      newVal.push(val);
    }
    dispatch(setTimes(newVal));
  }

  function toggleTimesAll() {
    dispatch(setTimes(currentTimes !== "all" ? "all" : []));
  }

  return (
    <Layout className={`${show ? "show" : ""}`} onClick={() => setShow((prev) => !prev)}>
      <Warpper onClick={(e) => e.stopPropagation()}>
        <Buttons>
          <div style={{ width: "100%" }}>
            <Button className={currentTimes === "all" ? "active" : ""} onClick={toggleTimesAll}>
              All
            </Button>
          </div>
          {times.map((t) => (
            <Button key={t} className={(currentTimes === "all" || currentTimes.find((el) => el === t)) && "active"} onClick={() => toggleTimes(t)}>
              {t}
            </Button>
          ))}
          <div style={{ width: "100%", marginTop: 20, textAlign: "right" }}>
            <Button onClick={(e) => setShow((prev) => !prev)}>Back</Button>
          </div>
        </Buttons>
      </Warpper>
    </Layout>
  );
}

export default Modal;
