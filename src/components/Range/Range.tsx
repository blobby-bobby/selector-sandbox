import { FunctionComponent, useState } from "react"
import styles from "./range.module.scss"
import { optionProps } from "../../types/types"

export const Range: FunctionComponent<optionProps> = (props) => {

    const [value, setValue] = useState<number>(2)

    const handleRange = (event: any) => {
        const val = event.target.value;
        setValue(val);
    };

  return (
    <div className={styles.ranger}>
        <div className={styles["ranger__output"]}>
            <output 
                className={styles["ranger__output--label"]} 
                name="output" htmlFor="range" 
                style={{left: `${value * props.options.length}%`, transform: `translateX(calc(-50% + ${value * props.options.length / 2}%))`}}
            >
            {props.options[value].label}
            </output>
      </div>

      <input type="range" name="range" id="range" 
            min="0" max={props.options.length - 1}
            className={styles["ranger__range"]} 
            value={value} 
            onChange={handleRange}
        />
        
        <div>
            <div className={styles.separator}></div>
            <p>You have selected the <em>almighty</em> : <span className={styles.selected}>{props.options[value].label}</span></p>
        </div>
    </div>
  )
}