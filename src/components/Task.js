import { FaTimes } from "react-icons/fa";
import cx from 'classnames'

const Task = ({task, onDelete, onToggle}) => {

  const onClick = () => {
    onDelete(task.id)
  }

  return (
    <div
      className={cx(`task`, {reminder: task.reminder})}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{color: 'red', cursor: 'pointer'}}
          onClick={onClick}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task