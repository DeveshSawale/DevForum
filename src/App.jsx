
// import './App.css'
import { useState } from "react"
import HeaderBar from "./components/HeaderBar"
import AddComment from "./components/addComment"
import Sidebar from "./components/sidebar"
import { useId } from "react"




function App() {
  const [communities, setCommunities] = useState([
    { id: 1, name: 'React Developersss',description : 'This community is for Developers',moderators : ["Devesh", "Shubham"], members : ["Aniket","Dipesh"] },
    { id: 2, name: 'Designers', description : 'This community is for Designers', moderators : ["Devesh", "Shubham"], members : ["Aniket","Dipesh"]},
    { id: 3, name: 'Gamers',description : 'This community is for Gamers',moderators : ["Devesh", "Shubham"], members : ["Aniket","Dipesh"]},
  ])
  
  const [threads, setThreads] = useState([
    { id: 1, name: 'General', communityId: 0 },
    { id: 2, name: 'Development', communityId: 1 },
    { id: 3, name: 'Design', communityId: 2 },
    { id: 4, name: 'Games', communityId: 3 },
  ])

  const [comments, setComments] = useState([{ id : 1, msg : "comment1", writer: "Devesh", threadId : 1},
  { id : 2, msg : "comment2", writer: "Shubham", threadId : 1},
  { id : 3, msg : "comment3", writer: "Krishna", threadId : 2},
  { id : 4, msg : "comment4", writer: "Aniket", threadId : 3},
  { id : 5, msg : "comment5", writer: "Ayut", threadId : 4},])
  
  const [selectedCommunity, setSelectedCommunity] = useState(communities[0].id);
  const [selectedThread, setSelectedThread] = useState(threads[0].id);


  const handleAddThread = (name) => {
    setThreads([...threads, {id : useId, name: name, communityId : selectedCommunity}])
  }

  const onAddComment = (comment) => {
    setComments([...comments,{id : useId,msg:comment, writer: 'Devesh', threadId : selectedThread}])
  }

  
  return (
    <>
      <HeaderBar/>
      <Sidebar communities = {communities} comments = {comments} threads = {threads} selectedCommunity = {selectedCommunity} selectedThread = {selectedThread} setSelectedCommunity = {setSelectedCommunity} setSelectedThread = {setSelectedThread} handleAddThread={handleAddThread}/>
      <AddComment onAddComment={onAddComment} />
    </>
  )
}

export default App
