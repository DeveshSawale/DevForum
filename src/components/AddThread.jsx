import React, {useId, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

const AddThread = ({selectedCommunity, openAddThreadForm, onClose, handleAddThread }) => {
  const classes = useStyles();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
        handleAddThread(name.trim());
      setName('');
      onClose();
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Dialog open={openAddThreadForm} onClose={onClose} aria-labelledby="add-thread-dialog-title">
      <DialogTitle id="add-thread-dialog-title">Add a thread</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Thread name"
            value={name}
            onChange={handleChange}
            className={classes.input}
          />
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Create
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddThread;
