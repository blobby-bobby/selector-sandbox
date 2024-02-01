import { FunctionComponent } from "react"
import { SelectOption } from "../../types/types";
import styles from './check.module.scss'

type CheckProps = {
  options: SelectOption[];
}

export const Check: FunctionComponent<CheckProps> = (props) => {
  return (
  <ul className={styles.checklist}>
    {props.options.map(option => (
      <li key={option.value} className={styles["checklist__item"]}>
        <input type="checkbox" id={option.label} name={option.label} className={styles.checkbox} />
        <span className="checkmark"></span>
        <label htmlFor={option.label}>{option.label}</label>
      </li>
    ))}
  </ul>  
  )
}