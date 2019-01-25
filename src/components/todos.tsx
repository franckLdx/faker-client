import * as React from 'react'
import { WithServerProps, withServer } from '../data/graphql';
import { Todo } from '../data/model';
import { Table } from 'reactstrap';

const TodosRow: React.SFC<WithServerProps> = ({ server }) => {
  const [todos, setTodos] = React.useState([] as Array<Todo>);

  React.useEffect(
    () => {
      server.getTodos('id', 'title', 'completed')
        .then(receivedTodos => setTodos(receivedTodos));
    },
    []
  );

  return (
    <div>
      <h5 className="text-center">Todos</h5>
      <Table striped bordered responsive>
        <THeader />
        <tbody>
          {todos.map(todo => <TLine key={todo.id} todo={todo} />)}
        </tbody>
      </Table >
    </div>
  );
}

const THeader: React.SFC<{}> = () => (
  <thead>
    <tr>
      <th className="text-right">Title</th>
      <th className="text-left">Completed</th>
    </tr>
  </thead>
);

const TLine: React.SFC<{ todo: Todo }> = ({ todo }) => (
  <tr>
    <th className="text-right">{todo.title}</th>
    <th className="text-left">{todo.completed ? 'yes' : 'no'}</th>
  </tr>
);

export const Todos = withServer(TodosRow);