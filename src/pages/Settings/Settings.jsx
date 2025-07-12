
import React, { useState } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import InputField from '../../components/InputField';

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      alert('Password updated successfully!');
      setIsModalOpen(false);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card title="Change Password" content="Update your account password" />
      <Button label="Change Password" onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <InputField label="Current Password" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        <InputField label="New Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <InputField label="Confirm New Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <Button label="Save" onClick={handleSubmit} />
      </Modal>
    </DashboardLayout>
  );
};

export default Settings;