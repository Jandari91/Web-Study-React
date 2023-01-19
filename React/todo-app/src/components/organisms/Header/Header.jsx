import "./Header.css";
import { sidebarAction } from "store/store";
import { useState } from "react";
import { Button } from "components/atoms/index";
import { useDispatch } from "react-redux";

export function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const dispatch = useDispatch();

  const onClickMenu = () => {
    setIsOpenSidebar(!isOpenSidebar);
    dispatch(sidebarAction(isOpenSidebar));
  };

  return (
    <div className="top_bar">
      <div className="top_bar_inner">
        <div className="left_control">
          <Button className="menu_btn" type="button" onClick={onClickMenu}>
            <span className="material-symbols-outlined menu_icon">menu</span>
          </Button>
        </div>
        <div className="right_control">bb</div>
      </div>
    </div>
  );
}
