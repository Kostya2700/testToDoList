import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { addTask } from 'redux/tasksSlice';
import css from './TaskForm.module.css';
import { nanoid } from 'nanoid';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const forms = event.currentTarget;
    dispatch(
      addTask({
        title: forms.elements.title.value,
        description: forms.elements.description.value,
        id: nanoid(),
      })
    );
    forms.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.labelField}>
        Title
        <input
          className={css.field}
          title="Please enter your title task."
          type="text"
          name="title"
          placeholder="Enter title"
          required
        />
      </label>

      <label className={css.labelField}>
        Description
        <input
          className={css.field}
          type="text"
          name="description"
          placeholder="Enter description"
          title="Please enter Description."
          required
        />
      </label>

      <Button type="submit">Create</Button>
    </form>
  );
};
