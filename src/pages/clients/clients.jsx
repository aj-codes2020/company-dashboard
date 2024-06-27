import React, { useState } from 'react';
import './clients.scss';
import { Table, Modal, Button } from '@aj-codes2020/ui-kit';

// Define columns for the table
const columns = ['Name', 'Age', 'Country'];

// Initial data for the table
const initialData = [
  { Name: 'John Doe', Age: '28', Country: 'USA' },
  { Name: 'Anna Smith', Age: '22', Country: 'UK' },
  { Name: 'Paul Brown', Age: '35', Country: 'Canada' },
  { Name: 'Dan Jones', Age: '44', Country: 'USA' },
];

// Button to trigger the modal for adding a new client
const addClientButton = <Button label="Add Client +" className="add-new-button" />;

const Clients = () => {
  const [data, setData] = useState(initialData);
  const [newClient, setNewClient] = useState({ Name: '', Age: '', Country: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  // Handle adding a new client to the table data
  const handleAddClient = () => {
    setData([...data, newClient]);
    setNewClient({ Name: '', Age: '', Country: '' });
    setIsModalOpen(false);
  };

  // Define input fields for the form
  const inputFields = [
    { label: 'Name', name: 'Name', autoComplete: 'name' },
    { label: 'Age', name: 'Age', autoComplete: 'age' },
    { label: 'Country', name: 'Country', autoComplete: 'country' },
  ];

  return (
    <>
      {/* Header Section */}
      <div id='clients' className="header-grouping">
        <h1 className="page-title">Clients</h1>
        <Modal
          title="Add New Client"
          trigger={addClientButton}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="modal-content">
            {inputFields.map((field) => (
              <label key={field.name} htmlFor={`client-${field.name.toLowerCase()}`}>
                {field.label}:
                <input
                  id={`client-${field.name.toLowerCase()}`}
                  type="text"
                  name={field.name}
                  placeholder={`Enter ${field.name}...`}
                  value={newClient[field.name]}
                  onChange={handleInputChange}
                  autoComplete={field.autoComplete}
                />
              </label>
            ))}
            <Button label="Add Client" onClick={handleAddClient} style={{color: 'white'}}/>
          </div>
        </Modal>
      </div>
      
      {/* Table Section */}
      <div className="tables grid-container">
        <div className="table-container grid-m-12">
          <Table
            columns={columns}
            data={data}
            itemsPerPage={10}
            showFilter={true}
            showNavigation={false}
            filterPlaceholder="Search clients..."
          />
        </div>
      </div>
    </>
  );
};

export default Clients;
