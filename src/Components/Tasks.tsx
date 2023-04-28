import { useState, useEffect } from 'react';

interface TaskType {
  id: number;
  name: string;
  description: string;
  status: string;
}

export const AllTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const tasksFromStorage = localStorage.getItem('Tasks');
    if (tasksFromStorage) {
      setTasks(JSON.parse(tasksFromStorage));
    }
  }, []);

//   if (!tasks.length) {
//     return <div>Loading...</div>;
//   } else {
    return (
      <div>
        {tasks.map((task: TaskType) => {
          return (
            <div key={task.id}>
              <h2>{task.name}</h2>
              <p>{task.description}</p>
              <p>{task.status}</p>
            </div>
          );
        })}
      </div>
    );
  }

