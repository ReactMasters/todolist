import styles from './Item.module.scss'

interface Props {
  name: string
}

const Item: React.FC<Props> = ({ name }) => {
  return <div className={styles.item}>{name}</div>
}

export default Item
