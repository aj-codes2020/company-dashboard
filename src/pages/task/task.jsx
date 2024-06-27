import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button, Modal } from '@aj-codes2020/ui-kit';
import { DroppableContainer } from '../../components';
import './task.scss';

// Uncomment and use these options as needed
// const employeeOptions = [
//   { value: 'Employee1', label: 'Dan' },
//   { value: 'Employee2', label: 'Jones' },
//   { value: 'Employee3', label: 'Adam' },
// ];

// const statusOptions = [
//   { value: 'notStarted', label: 'Not Started', color: 'danger' },
//   { value: 'started', label: 'Started', color: 'primary' },
//   { value: 'completed', label: 'Completed', color: 'success' },
// ];

const Task = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Title 1', description: 'Description', assignedTo: 'Dan', status: 'notStarted' },
    { id: 2, title: 'Title 2', description: 'Description', assignedTo: 'Jones', status: 'started' },
    { id: 3, title: 'Title 3', description: 'Description', assignedTo: 'Adam', status: 'completed' },
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    status: 'notStarted',
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Function to move a card to a different status
  const moveCard = (id, status) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, status } : card))
    );
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    const newCard = {
      id: cards.length + 1,
      title: newTask.title,
      description: newTask.description,
      assignedTo: newTask.assignedTo,
      status: newTask.status,
    };
    setCards([...cards, newCard]);
    setNewTask({
      title: '',
      description: '',
      assignedTo: '',
      status: 'notStarted',
    });
    setIsAddModalOpen(false);
  };

  // Function to edit an existing task
  const editTask = (id, updates) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, ...updates } : card))
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  // Filter cards based on status
  const notStartedCards = cards.filter((card) => card.status === 'notStarted');
  const startedCards = cards.filter((card) => card.status === 'started');
  const completedCards = cards.filter((card) => card.status === 'completed');

  return (
    <DndProvider backend={HTML5Backend}>
      <div id='task'>
        <div className="header-grouping">
          <h1 className="page-title">Tasks</h1>
          <Modal
            title="Add New Task"
            trigger={<Button label="Add Task +" className="add-new-button" />}
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
          >
            <div className="modal-content">
              <label htmlFor="task-title">
                Task Title:
                <input
                  type="text"
                  id="task-title"
                  name="task-title"
                  value={newTask.title}
                  placeholder="Enter Title..."
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
              </label>
              <label htmlFor="task-description">
                Task Description:
                <input
                  type="text"
                  id="task-description"
                  name="task-description"
                  value={newTask.description}
                  placeholder="Enter Description..."
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
              </label>
              {/*
              <label htmlFor="task-assignedTo">
                Assign To:
                <Select
                  id="task-assignedTo"
                  name="task-assignedTo"
                  options={employeeOptions}
                  placeholder="Select employee..."
                  onChange={(selected) => setNewTask({ ...newTask, assignedTo: selected.label })}
                />
              </label>
              <label htmlFor="task-status">
                Status:
                <Select
                  id="task-status"
                  name="task-status"
                  options={statusOptions}
                  value={statusOptions.find(option => option.value === newTask.status)}
                  placeholder="Select status..."
                  onChange={(selected) => setNewTask({ ...newTask, status: selected.value })}
                />
              </label>
              */}
              <Button label="Add Task" onClick={handleAddTask} style={{color: 'white'}}/>
            </div>
          </Modal>
        </div>
        <div className="grid-container">
          <DroppableContainer
            title="Not Started"
            cards={notStartedCards}
            onDrop={(id) => moveCard(id, 'notStarted')}
            editTask={editTask}
            deleteTask={deleteTask}
          />
          <DroppableContainer
            title="Started"
            cards={startedCards}
            onDrop={(id) => moveCard(id, 'started')}
            editTask={editTask}
            deleteTask={deleteTask}
          />
          <DroppableContainer
            title="Completed"
            cards={completedCards}
            onDrop={(id) => moveCard(id, 'completed')}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default Task;
