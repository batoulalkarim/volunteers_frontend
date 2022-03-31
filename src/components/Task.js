import React from 'react' 
import TaskCard from './TaskCard'


function Task({commitList, onCommitmentClick}) {

  const commitedList = commitList.map((commit) => {
      return(<TaskCard key={commit.id} onCommitmentClick={onCommitmentClick}/>)
  })

    return(
        <div className='taskwrap'>
            Tasks
           {commitedList}
        </div>
    )
}

export default Task