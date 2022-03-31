import React from 'react'


function CommitedCard({commit, onRemoveCommitmentClick}){
 console.log(commit.commit)
 console.log(onRemoveCommitmentClick)
 
    return(
    <div className='ui card' key={commit.id}>
     <h4>{commit.name}</h4>
        <div className='orgcardtitle'>
            <h5>Commited Task:{commit.commited_tasks}</h5>
            <p>Description:{commit.description}</p>
            <p>Hours:{commit.time_commitment_hours}</p>
        </div>
        <button onClick={() => onRemoveCommitmentClick(commit)}>Remove Commitment</button>
    </div>
    )
}







export default CommitedCard;