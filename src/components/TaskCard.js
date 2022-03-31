import React from 'react'


function TaskCard ({organization, onCommitmentClick}) {
    console.log(organization)
    

return (
    <div className='ui column'>
    <div className='ui card' key={organization.id}>
     <h4>{organization.name}</h4>
     <br></br>
        <div className='orgcardtitle'>
            <h5>Build</h5>
            <p>{organization.build}</p>
            <button onClick={() =>onCommitmentClick(organization, "build")}>Commitment</button>
        </div>
        <br></br>
        <div className='orgcardlocation'>
            <h6>Pack and Ship</h6>
            <p>{organization.pack_and_ship}</p>
            <button onClick={() =>onCommitmentClick(organization, "pack_and_ship")}>Commitment</button>
        </div>
        <br></br>
        <div className='orgcardbio'>
            <h7>Installation</h7>
            <p>{organization.installation}</p>
            <button onClick={() =>onCommitmentClick(organization, "installation")}>Commitment</button>
        </div>

    </div>
    </div>
)
}

// "fetech(data)/${id}"



export default TaskCard;