import styles from './TodoItem.module.scss'

interface Props {
  name: string
}

const TodoItem: React.FC<Props> = ({ name }) => {
  return <div className={styles.todoitem}>{name}</div>
}

export default TodoItem
