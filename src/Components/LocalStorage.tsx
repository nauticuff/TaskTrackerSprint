

interface ValueObject {
    // id: string;
    title: string,
    description: string,
    status: string
}

const getLocalStorage = () => {
    const localStorageData = localStorage.getItem('Tasks');
    return localStorageData ? JSON.parse(localStorageData) : [];
}

const SaveTask = (value: ValueObject) => {
    const tasks = getLocalStorage();
    tasks.push(value);
    localStorage.setItem('Tasks', JSON.stringify(tasks));
}

function removeFromLocalStorage(object: ValueObject) {
    const tasks: ValueObject[] = getLocalStorage();
    const index = tasks.findIndex(task => 
      task.title === object.title &&
      task.description === object.description &&
      task.status === object.status
    );
  
    tasks.splice(index, 1);
    localStorage.setItem('Tasks', JSON.stringify(tasks));
}


export { SaveTask, removeFromLocalStorage};
