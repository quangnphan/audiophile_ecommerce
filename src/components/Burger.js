import { useGlobalContext } from "../context/context";

const Burger = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();
  return (
    <div className="burger-wrapper" onClick={toggleSideBar}>
      <div className={isSideBarOpen ? "burger open" : "burger"}></div>
    </div>
  );
};
export default Burger;
