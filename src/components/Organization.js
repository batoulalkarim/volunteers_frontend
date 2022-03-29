import React from 'react';
import OrgCard from './OrgCard';

 function Organization( {organizations} ) {
    const orgCards = organizations.map((organization) => {
        return <OrgCard key={organization.id} organization={organization} />
    })

    return(
        <div className='orgwrap'>
            
            Organizations
            {orgCards}
            
        </div>
    )
}

export default Organization;