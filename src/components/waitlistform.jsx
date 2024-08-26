import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

const WaitlistForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "waitlist"), {
        name,
        email,
        timestamp: new Date(),
      });
      alert("You have been added to the waitlist!");
      setName('');
      setEmail('');
      onSubmit(); 
    } catch (error) {
      console.error("Error adding to waitlist: ", error);
      alert("There was an issue. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '300px',
        margin: 'auto',
        padding: 3,
        backgroundColor: '#faeded', 
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 2, 0, 0.2)', 
      }}
    >
      <Typography variant="h5" color="black">Join the Waitlist</Typography>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ input: { color: 'black' }, label: { color: 'black' }, marginBottom: 2 }} // Adjust text color
      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ input: { color: 'black' }, label: { color: 'black' }, marginBottom: 2 }} // Adjust text color
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#d32f2f', // Darker red for button
          color: 'white',
          '&:hover': {
            backgroundColor: '#b71c1c', // Darker red on hover
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};


export default WaitlistForm;
