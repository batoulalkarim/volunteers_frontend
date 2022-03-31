import React from 'react';
import OrgCard from './OrgCard';

 function Organization( {organizations, onCommitmentClick} ) {
    const orgCards = organizations.map((organization) => {
        return <OrgCard key={organization.id} organization={organization} onCommitmentClick={onCommitmentClick} />
    })

    return(
        <div className='orgwrap'>
            Organizations
            {orgCards}
            
        </div>
    )
}

export default Organization;