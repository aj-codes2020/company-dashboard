import React from 'react';
import { useDrop } from 'react-dnd';
import { DraggableCard } from '..';
import './droppableContainer.scss';

// Define item types for react-dnd
const ItemTypes = {
  CARD: 'card',
};

const DroppableContainer = ({ title, cards, onDrop, editTask, deleteTask }) => {
  // Set up drop functionality using react-dnd
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => onDrop(item.id),
  }), []);

  return (
    <div className="task-container grid-m-12 grid-d-4" ref={drop}>
      {/* Container title */}
      <h3>{title}</h3>
      
      {/* Sub-container for draggable cards */}
      <div className="task-sub-container">
        {cards.map((card) => (
          <DraggableCard 
            key={card.id} 
            {...card} 
            editTask={editTask} 
            deleteTask={deleteTask} 
            moveCard={onDrop} 
          />
        ))}
      </div>
    </div>
  );
};

export default DroppableContainer;
