import { MenuButton } from "components/molecules";
import style from "./MainMenu.module.css";

export function MainMenu() {
  return (
    <>
      <div className={style.main_menus}>
        <MenuButton icon="data_exploration" label="관리함" count="10" />
        <MenuButton icon="data_exploration" label="오늘" />
        <MenuButton icon="data_exploration" label="다음" />
        <MenuButton icon="data_exploration" label="필터&라벨" />
      </div>
    </>
  );
}
