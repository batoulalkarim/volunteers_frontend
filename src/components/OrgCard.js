import React from 'react';


function OrgCard({ organization }) {
  
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
            
        </div>
        </div>  
    )
}

export default OrgCard