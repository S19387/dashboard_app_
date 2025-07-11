// src/pages/Settings/Settings.jsx
import React, { useState } from 'react';
import Card from '../../components/Card/Card';  // Reusable Card component
import Button from '../../components/Button/Button';  // Reusable Button component
import InputField from '../../components/InputField/InputField';  // Reusable InputField component
import Modal from '../../components/Modal/Modal';  // Reusable Modal component

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      alert('Password updated successfully!');
      closeModal();
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Settings Cards */}
      <Card title="Change Password" content="Update your account password" />
      
      {/* Button to open modal for changing password */}
      <Button label="Change Password" onClick={openModal} />

      {/* Modal for changing password */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Change Password</h2>
        <InputField
          label="Current Password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <InputField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputField
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button label="Save" onClick={handleSubmit} />
      </Modal>
    </div>
  );
};

export default Settings;
