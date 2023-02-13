import { Dropdown } from "react-bootstrap";
import style from "./ColorSelector.module.css";
import { useState } from "react";

export function ColorSelector({ colors }) {
  const [selectedItem, setSelectedItem] = useState(colors[0]);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className={style.toggle}>
          <ColorItem color={selectedItem.color} name={selectedItem.name} />
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.colorMenus}>
          {colors.map((item, index) => {
            return (
              <div className={style.colorItem}>
                <ColorItem
                  clickHandler={() => {
                    setSelectedItem(item);
                  }}
                  key={index}
                  color={item.color}
                  name={item.name}
                />
              </div>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export function ColorItem({ color, name, clickHandler }) {
  return (
    <>
      <div className={style.container} onClick={clickHandler}>
        <div className={style.circle} style={{ backgroundColor: color }} />
        <div>{name}</div>
      </div>
    </>
  );
}
