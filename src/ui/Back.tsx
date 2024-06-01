import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeActive } from "../store/reducer/themeReducer";

const Back = () => {
  const { active } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    active && (
      <div
        className="lg:hidden fixed block w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-30 transition-all duration-300"
        onClick={() => dispatch(changeActive(!active))}
      ></div>
    )
  );
};

export default Back;
