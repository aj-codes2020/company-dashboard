import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Modal, Card, Button, Badge } from '@aj-codes2020/ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './draggableCard.scss';

// Define item types for react-dnd
const ItemTypes = {
  CARD: 'card',
};

// Status options for tasks
const statusOptions = [
  { value: 'notStarted', label: 'Not Started', color: 'danger' },
  { value: 'started', label: 'Started', color: 'primary' },
  { value: 'completed', label: 'Completed', color: 'success' },
];

// Uncomment and use these options as needed
// const employeeOptions = [
//   { value: 'Employee1', label: 'Dan Jones' },
//   { value: 'Employee2', label: 'Jones Dan' },
//   { value: 'Employee3', label: 'Adam Dan' },
// ];

const DraggableCard = ({ id, title, description, assignedTo, status, moveCard, editTask, deleteTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id]);

  const opacity = isDragging ? 0.4 : 1;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({ title, description, assignedTo, status });

  // Handle saving the edited task
  const handleSave = () => {
    editTask(id, editedTask);
    moveCard(id, editedTask.status);
    setIsEditModalOpen(false);
  };

  // Get the current status option
  const currentStatus = statusOptions.find(option => option.value === status);

  return (
    <div ref={drag} style={{ opacity }}>
      <Card className="task-card">
        <div className="task-header">
          <div className="task-title">
            <b>{title}</b>
          </div>
          <div className="task-edit-button">
            <Modal
              title="Edit Task"
              trigger={<FontAwesomeIcon icon={faPen} className="edit-button" />}
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
            >
              <div className="modal-content">
                <label htmlFor={`edit-task-title-${id}`}>
                  Task Title:
                  <input
                    type="text"
                    id={`edit-task-title-${id}`}
                    name="task-title"
                    value={editedTask.title}
                    placeholder="Edit Title..."
                    onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                  />
                </label>
                <label htmlFor={`edit-task-description-${id}`}>
                  Task Description:
                  <input
                    type="text"
                    id={`edit-task-description-${id}`}
                    name="task-description"
                    value={editedTask.description}
                    placeholder="Edit Description..."
                    onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                  />
                </label>
                {/*
                <label htmlFor={`edit-task-assignedTo-${id}`}>
                  Assign To:
                  <Select
                    id={`edit-task-assignedTo-${id}`}
                    name="task-assignedTo"
                    options={employeeOptions}
                    value={employeeOptions.find(option => option.label === editedTask.assignedTo)}
                    placeholder="Select employee..."
                    onChange={(selected) => setEditedTask({ ...editedTask, assignedTo: selected.label })}
                  />
                </label>
                <label htmlFor={`edit-task-status-${id}`}>
                  Status:
                  <Select
                    id={`edit-task-status-${id}`}
                    name="task-status"
                    options={statusOptions}
                    value={statusOptions.find(option => option.value === editedTask.status)}
                    placeholder="Select status..."
                    onChange={(selected) => setEditedTask({ ...editedTask, status: selected.value })}
                  />
                </label>
                */}
                <Button label="Save" onClick={handleSave} style={{color: 'white'}} />
                <Button label="Delete" onClick={() => deleteTask(id)} style={{color: 'white'}}/>
              </div>
            </Modal>
          </div>
        </div>
        <div className="task-description">
          {description}
        </div>
        <div className="task-footer">
          <div className="task-assigned-to">
            <b>Assignee: {assignedTo}</b>
          </div>
          <div className="task-status">
            <Badge color={currentStatus.color} size="medium">
              {currentStatus.label}
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DraggableCard;
