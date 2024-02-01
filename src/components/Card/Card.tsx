import { FunctionComponent, ReactNode } from "react"
import styles from './card.module.scss'

type CardProps = {
    title?: string,
    children: ReactNode
}

export const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <section className={styles.card}>
        <h2 className={styles["card__title"]}>{props.title}</h2>

        {props.children}
    </section>
  )
}