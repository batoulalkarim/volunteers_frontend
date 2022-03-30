import React from 'react'


function TaskCard ({organization, onClick}) {

return (
    <div className='ui column'>
    <div className='ui card' key={organization.id}>
        <div className='orgcardtitle'>
            <h4>{organization.name}</h4>
            <p>{organization.build}</p>
            <button onClick={onClick}>Remove Commitment</button>
        </div>
        <div className='orgcardlocation'>
            <h5>{organization.name}</h5>
            <p>{organization.pack_and_ship}</p>
            <button onClick={onClick}>Remove Commitment</button>
        </div>
        <div className='orgcardbio'>
            <h6>{organization.name}</h6>
            <p>{organization.installation}</p>
            <button onClick={onClick}>Remove Commitment</button>
        </div>

    </div>
    </div>
)
}



export default TaskCard;