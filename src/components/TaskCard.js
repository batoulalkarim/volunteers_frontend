import React from 'react'


function TaskCard ({organization, onCommitmentClick}) {

    

return (
    <div className='ui column'>
    <div className='ui card' key={organization.id}>
        <div className='orgcardtitle'>
            <h4>{organization.name}</h4>
            <p>{organization.build}</p>
            <button onClick={() =>onCommitmentClick(organization)}>Commitment</button>
        </div>
        <div className='orgcardlocation'>
            <h5>{organization.name}</h5>
            <p>{organization.pack_and_ship}</p>
            <button onClick={() =>onCommitmentClick(organization)}>Commitment</button>
        </div>
        <div className='orgcardbio'>
            <h6>{organization.name}</h6>
            <p>{organization.installation}</p>
            <button onClick={() =>onCommitmentClick(organization)}>Commitment</button>
        </div>

    </div>
    </div>
)
}

// "fetech(data)/${id}"



export default TaskCard;