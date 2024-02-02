import { FunctionComponent, useState } from "react"
import { optionProps } from "../../types/types";
import styles from './check.module.scss'

export const Check: FunctionComponent<optionProps> = (props) => {

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(value)) {
        return prevCheckedItems.filter(item => item !== value);
      } else {
        return [...prevCheckedItems, value];
      }
    });
  };

  return (
    <ul className={styles.checklist}>
      {props.options.map(option => (
        <li key={option.value} className={`${styles["checklist__item"]} ${checkedItems.includes(option.label) ? styles.checked : ""}`}>
          <input type="checkbox" id={option.label} name={option.label} className={styles.checkbox} onClick={() => handleCheckboxChange(option.label)} />
          <label htmlFor={option.label}>{option.label}</label>
        </li>
      ))}
    </ul>  
  )
}
