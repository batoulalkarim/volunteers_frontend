import React, {useState} from 'react';
import Popup from './Popup'
import TaskCard from './TaskCard';



function OrgCard({ organization, onCommitmentClick}) {

    const [buttonPopup, setButtonPopup] = useState(false)

    const taskscard = <TaskCard key={organization.id} organization={organization} onCommitmentClick={onCommitmentClick}/>
 
    console.log(organization)

    return(
        
        <div className='ui column'>
        <div className='ui card' key={organization.id}>
            <div className='orgcardtitle'>
                <h4>{organization.name}</h4>
            </div>
            <div className='orgcardlocation'>
                <h5>{organization.location}</h5>
            </div>
            <div className='orgcardbio'>
                <h4>{organization.bio}</h4>
            </div>
            <button onClick={() => setButtonPopup(true)} trigger={buttonPopup}>View Available Tasks</button>
         <Popup trigger={buttonPopup ? true : null} setTrigger={setButtonPopup}>
             {taskscard}
         </Popup>
        </div>
        </div>  
    )
}

export default OrgCard