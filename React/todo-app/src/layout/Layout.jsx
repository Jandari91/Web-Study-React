import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "components/organisms";
import { Manage, Today } from "pages/";
import { useSelector, useDispatch } from "react-redux";
export function Layout() {
  const { sidebar } = useSelector((state) => {
    return state;
  });

  return (
    <>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.center}>
        <div className={sidebar ? style.sidebar_open : style.sidebar_close}>
          {sidebar ? <Sidebar /> : null}
        </div>
        <div className={style.main}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
