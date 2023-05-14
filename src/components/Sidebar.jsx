import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import AddThread from './AddThread';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  communities: {
    flexGrow: 1,
    backgroundColor : '#2f3135',
    color : 'white',
  },
  threads: {
    marginBottom: theme.spacing(1),
  },
  comments :{

  }
}));

const Sidebar = (props) => {
  const {communities, threads, comments, selectedCommunity, selectedThread, setSelectedCommunity, setSelectedThread, handleAddThread} = props
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false)
  const [openAddThreadForm, setOpenAddThreadForm] = useState(false)
  

  const handleCommunityClick = (communityId) => {
    setSelectedCommunity(communityId);
    setShowComments(false)
  };
  const handleThreadClick = (threadId) => {
    setSelectedThread(threadId);
    setShowComments(true)
  };
  const onClose = () =>{
    setOpenAddThreadForm(false)
  }

  const filteredthreads = threads.filter((thread) => thread.communityId === selectedCommunity);
  const filteredcomments = comments.filter((comment) => comment.threadId === selectedThread);
  
  return (
    <div className={classes.root}>
      <List className={classes.communities}>
        {communities.map((community) => (
          <ListItem
            button
            key={community.id}
            selected={selectedCommunity === community.id}
            onClick={() => handleCommunityClick(community.id)}
            >
            <ListItemText primary={community.name} />
            <AddIcon onClick = {() => {setOpenAddThreadForm(true)}}/>
            <AddThread selectedCommunity = {selectedCommunity} openAddThreadForm = {openAddThreadForm} onClose={onClose} handleAddThread={handleAddThread} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.threads}>
        { filteredthreads.map((thread) => (
          <ListItem 
            button key={thread.id}
            onClick={() => handleThreadClick(thread.id)}
          >
            <ListItemText 
            primary={`#${thread.name}`} 
            />
            
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.comments}>
        {showComments && filteredcomments.map((comment) => (
          <ListItem key={comment.id}>
            {comment.msg}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
