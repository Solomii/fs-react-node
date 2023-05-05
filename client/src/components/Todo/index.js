import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addTask, removeTask, setDoneTask } from '../../store/todoSlice';

const Todo = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    if (values.text) {
      dispatch(addTask({ text: values.text }));
      formikBag.resetForm();
    }
  };
  const handleDone = (id) => {
    dispatch(setDoneTask({ id }));
  };
  const handleDelete = (id) => {
    dispatch(removeTask({ id }));
  };
  return (
    <section>
      <h2>ADD NEW TASK: </h2>
      <Formik initialValues={{ text: '' }} onSubmit={onSubmit}>
        <Form>
          <Field name="text" />
          <input type="submit" value="ADD" />
        </Form>
      </Formik>
      <h2>Tasks LIST: </h2>
      {tasks.map(({ id, text, isDone }) => (
        <article
          key={id}
          style={{
            display: 'flex',
          }}
        >
          <input
            type="checkbox"
            value={isDone}
            checked={isDone}
            onChange={() => handleDone(id)}
          />
          <h3 style={{ margin: 'auto' }}> {text} </h3>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </article>
      ))}
    </section>
  );
};

export default Todo;
