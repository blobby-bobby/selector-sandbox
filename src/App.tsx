import { useState } from "react"
import { Select } from "./components/Select/Select"
import { SelectOption, options } from "./types/types"
import styles from './app.module.css'

function App() {

  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  // useEffect(() => {
  //   console.table(value1)
  //   console.table(value2)
  // }, [value1])

  return (
    <main className={styles.fullpage}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Pick your besties</h2>
        <Select 
          multiple 
          options={options} 
          value={value1} 
          onChange={o => setValue1(o)} 
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Pick your totem animal</h2>
        <Select 
          options={options} 
          value={value2} 
          onChange={o => setValue2(o)} 
        />
      </section>
      
    </main>
  )
}

export default App
