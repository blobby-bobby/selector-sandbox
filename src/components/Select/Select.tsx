import { FunctionComponent, useEffect, useRef, useState } from "react"
import { SelectOption, SelectProps } from "../../types/types"
import styles from './select.module.css'

export const Select: FunctionComponent<SelectProps> = (props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [hightlightedIndex, setHighlightedIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const clearOptions = () => {
    props.multiple ? props.onChange([]) : props.onChange(undefined)
  }

  const selectOption = (option: SelectOption) => {
   if (props.multiple) {

      if (props.value.includes(option)) {
        props.onChange(props.value.filter(o => o !== option))
      } else {
        props.onChange([...props.value, option])
      }

   } else {
      if (option !== props.value) props.onChange(option)
   }
  }

  const isOptionSelected = (option: SelectOption) => {
    return props.multiple ? props.value.includes(option) : option === props.value
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen(prev => !prev)
          if (isOpen) selectOption(props.options[hightlightedIndex])
          break
        case "ArrowUp":
        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = hightlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
          if (newValue >= 0 && newValue < props.options.length) {
            setHighlightedIndex(newValue)
          }
          break;
        case "Escape":
          setIsOpen(false)
          break;
      }
    }

    containerRef.current?.addEventListener("keydown", handler)

    return () => {
      containerRef.current?.removeEventListener("keydown", handler)
    }
  }, [isOpen, hightlightedIndex, props.options])


  return (
    <>
    <div 
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)} 
      tabIndex={0} 
      className={styles.container}
    >
      {/* THE CONTENT OF THE INPUT */}
      <div className={styles.value}>
        {props.multiple ? 
          (props.value.length !== 0 ? props.value[props.value.length - 1].label : 
            <span className={styles["empty-select"]}>No bestie yet</span>
            ) : (
              props.value ? props.value.label : <span className={styles["empty-select"]}>No animal totem selected</span>)
        }
        </div>
        
        {/* CLEAR BUTTON */}
        {props.multiple ? 
          (props.value.length !== 0 ? 
          <button 
            onClick={e => {
              e.stopPropagation()
              clearOptions()
              }} 
            className={styles["clear-btn"]}>&times;</button> : ""
            ) : (
              props.value ? 
            <button 
              onClick={e => {
                e.stopPropagation()
                clearOptions()
                }} 
              className={styles["clear-btn"]}>&times;</button> : ""
          )
        }
        
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      
      {/* DROPDOWN */}
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {props.options.map((option, index) => (
          <li 
            key={option.value} 
            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : "" } ${index === hightlightedIndex ? styles.highlighted : ""}
            `}
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }} 
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>

    {/* MULTIPLE LABELS */}
        <div className={`${styles.value} ${styles["multival-container"]}`}>
      {props.multiple ? props.value.map((val) => (
          <button 
            key={val.value} 
            onClick={e =>{
              e.stopPropagation
              selectOption(val)
            }}
            className={styles["option-badge"]}
            >
              {val.label}
              <span className={styles["remove-btn"]}>&times;</span>
          </button>
        )) : ""}
    </div>
    </>
  );
}
