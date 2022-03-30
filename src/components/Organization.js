import React from 'react';
import OrgCard from './OrgCard';

 function Organization( {organizations, trigger, onClick, setTrigger} ) {
    const orgCards = organizations.map((organization) => {
        return <OrgCard key={organization.id} organization={organization} trigger={trigger} onClick={onClick} setTrigger={setTrigger} organizations={organizations} />
    })

    return(
        <div className='orgwrap'>
            Organizations
            {orgCards}
            
        </div>
    )
}

export default Organization;