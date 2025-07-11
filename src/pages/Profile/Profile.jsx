// src/pages/Profile/Profile.jsx
import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import InputField from '../../components/InputField';


const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    setUsername(newUsername);
    setEmail(newEmail);
    closeModal(); // Close modal after submitting changes
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* Displaying User Profile */}
      <div className="flex flex-col items-center mb-6">
        <Card title="Name" content={username} />
        <Card title="Email" content={email} />
      </div>

      {/* Button to edit profile */}
      <Button label="Edit Profile" onClick={openModal} />

      {/* Modal for editing profile */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Edit Profile</h2>
        <InputField
          label="New Username"
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <InputField
          label="New Email"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <Button label="Save" onClick={handleSubmit} />
      </Modal>
    </div>
  );
};

export default Profile;
