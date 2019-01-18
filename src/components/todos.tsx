import * as React from 'react'
import { WithServerProps, withServer } from '../data/graphql';
import { Todo } from '../data/model';
import { DataTable } from 'grommet/components/DataTable';

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
    <DataTable
      columns={columns}
      data={todos}
      sortable={true}
    />
  );
}

const completedRenderer = (...args: any[]) => args[0].completed ? 'done' : '';

const columns = [
  { property: 'title', header: 'Title', search: true },
  {
    property: 'completed', header: 'Completed', search: true, render: completedRenderer
  }
];

export const Todos = withServer(TodosRow);