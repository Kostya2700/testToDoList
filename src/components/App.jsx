import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { getTasks } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const tasks = useSelector(getTasks);

  return (
    <Layout>
      <AppBar />
      <TaskForm />

      {tasks.length ? <TaskList /> : <p>Please write you ToDo</p>}
    </Layout>
  );
};
