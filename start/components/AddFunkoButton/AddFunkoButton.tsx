import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import { Funko } from '../../types/funko';

const AddFunkoButton = ({ setFunkos }: { setFunkos: React.Dispatch<React.SetStateAction<Funko[]>> }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    imageUrl: '',
    source: '',
    character: '',
    yearReleased: '',
    numberInLine: '',
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/funkos', formValues);
      setFunkos((funkos: Funko[]) => [...funkos, response.data]);
      handleClose(); // Close the dialog after submission
    } catch (error) {
      console.error('Error adding Funko:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>

      {/* Code to create Add Button functionality goes here */}
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Funko!
      </Button>
      <TextField
        margin="normal"
        name=""
        label=""
        type="normal"
        fullWidth
        value={ }
        onChange={handleInputChange}
      />
      <DialogActions>
        <Button onClick={handleClose} color="#ef5350">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="#0d47a1">
          Submit
        </Button>
      </DialogActions>

    </div>
  );
};

export default AddFunkoButton;
