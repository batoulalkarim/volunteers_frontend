import React from 'react';
import Popup from './Popup'
import TaskCard from './TaskCard';


function OrgCard({ organization, onClick, trigger, setTrigger, organizations }) {

    const taskscards = organizations.map((organization) => {
        return <TaskCard key={organization.id} organization={organization} onClick={onClick}/>
    })

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
            <button onClick={onClick}>View Available Tasks</button>
         <Popup trigger={trigger} setTrigger={setTrigger}>
             {taskscards}
         </Popup>
            
        </div>
        </div>  
    )
}

export default OrgCard