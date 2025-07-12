import React, { useState } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import InputField from '../../components/InputField';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('Dasuni');
  const [email, setEmail] = useState('dasuni23@example.com');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = () => {
    setUsername(newUsername);
    setEmail(newEmail);
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card title="Name" content={username} />
        <Card title="Email" content={email} />
      </div>
      <Button label="Edit Profile" onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <InputField label="New Username" type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <InputField label="New Email" type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <Button label="Save" onClick={handleSubmit} />
      </Modal>
    </DashboardLayout>
  );
};

export default Profile;