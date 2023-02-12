import style from "./Dropdown.module.css";
import { Dropdown as ReactDropdown } from "react-bootstrap/Dropdown";

export function Dropdown() {
  return (
    <ReactDropdown>
      <ReactDropdown.Toggle size="sm" className={css.selectredArea}>
        {selectedColor ? (
          <ColorSelectorItem
            color={selectedColor.color}
            title={selectedColor.title}
          />
        ) : (
          <ColorSelectorItem color={""} title={"ㅤ"} />
        )}
      </ReactDropdown.Toggle>

      <ReactDropdown.Menu className={css.selectorItemContainer}>
        {items.map((t) => (
          <ReactDropdown.Item
            className={css.selectorItemBox}
            onClick={() => {
              selectedColorHandle(t);
            }}
            key={t.color}
          >
            <ColorSelectorItem color={t.color} title={t.title} />
          </ReactDropdown.Item>
        ))}
      </ReactDropdown.Menu>
    </ReactDropdown>
  );
}
