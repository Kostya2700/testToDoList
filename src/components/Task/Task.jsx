import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import css from './Task.module.css';
import { useToggle } from 'hooks/useToggle';
import Modal from 'components/Moda/Modal';

export const Task = ({ task, counter, toggleModal }) => {
  const dispatch = useDispatch();
  const { isOpen, toggle } = useToggle();
  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <>
      {isOpen && (
        <Modal onClose={toggle}>
          <button type="button" onClick={toggle}>
            Close
          </button>
          <div>
            <p className={css.textq}>Task number: {counter}</p>
            <h2 className={css.title}>{task.title}</h2>
            <p className={css.textq}>
              <b>Description</b>: {task.description}
            </p>
            <div className={css.modalBtn}>
              <span>Status </span>
              <input
                type="checkbox"
                className={css.checkbox}
                checked={task.completed}
                onChange={handleToggle}
              />
              <span>Delete </span>
              <button className={css.btn} onClick={handleDelete}>
                <MdClose size={24} />
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div className={css.wrapper}>
        <div className={css.modalMain} onClick={() => toggle()}>
          <p className={css.text}>{counter}</p>
          <p className={css.text}>{task.title}</p>
          <p className={css.text}>{task.description}</p>
        </div>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />

        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </>
  );
};
