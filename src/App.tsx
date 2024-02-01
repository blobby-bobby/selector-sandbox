  import { useState } from "react"
  import { Dropdown } from "./components/Dropdown/Dropdown"
  import { Check } from "./components/Check/Check"
  import { Card } from "./components/Card/Card"
  import { SelectOption, options } from "./types/types"
  import styles from './app.module.scss'
import { Range } from "./components/Range/Range"

  function App() {

    const [value1, setValue1] = useState<SelectOption[]>([options[0]])
    const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

    // useEffect(() => {
    //   console.table(value1)
    //   console.table(value2)
    // }, [value1])

    return (
      <main className={styles.fullpage}>
        <Card title="Select your bestie (single-select)">
          <Dropdown 
            options={options} 
            value={value2} 
            onChange={o => setValue2(o)} 
          />
        </Card>

        <Card title="Select your besties (multi-select)">
          <Dropdown 
            multiple 
            options={options} 
            value={value1} 
            onChange={o => setValue1(o)} 
          />
        </Card>

        <Card title="Select your besties (checklist)">
          <Check options={options} />
        </Card>

        <Card title="Select your bestie (range)">
          <Range options={options} />
        </Card>
        
      </main>
    )
  }

  export default App
