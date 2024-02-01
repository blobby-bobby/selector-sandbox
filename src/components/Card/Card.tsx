import { FunctionComponent, ReactNode } from "react";
import styles from './card.module.scss';

type CardProps = {
    title?: string,
    children: ReactNode
}

export const Card: FunctionComponent<CardProps> = (props) => {

  if (!props.children) {
    throw new Error("children prop is required");
  }

  return (
    <section className={styles.card}>
        {props.title ? <h2 className={styles["card__title"]}>{props.title}</h2> : ""}

        {props.children}
    </section>
  )
}