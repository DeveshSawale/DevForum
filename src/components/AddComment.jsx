import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const AddComment = ({ onAddComment }) => {
  const classes = useStyles();
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      onAddComment(comment.trim());
      setComment('');
    }
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Add a comment..."
        value={comment}
        onChange={handleChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="send">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default AddComment;
