import React from 'react' 
import CommitedCard from './CommitedCard'


function Task({ onRemoveCommitmentClick, commits}) {

    console.log(commits)
    // console.log(onRemoveCommitmentClick)
  const commitedList = commits.map((commit) => {
      console.log(onRemoveCommitmentClick)
      return(<CommitedCard key={commit.id} onRemoveCommitmentClick={onRemoveCommitmentClick} commit={commit}/>)
  })

    return(
        <div className='taskwrap'>
            Tasks
           {commitedList}
        </div>
    )
}

export default Task