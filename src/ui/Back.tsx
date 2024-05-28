import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeActive } from "../store/reducer/logicReducer";

const Back = () => {
  const { active } = useSelector((state: RootState) => state.logic);
  const dispatch = useDispatch();

  return (
    active && (
      <div
        className="lg:hidden fixed block w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-10 transition-all duration-300"
        onClick={() => dispatch(changeActive(!active))}
      ></div>
    )
  );
};

export default Back;