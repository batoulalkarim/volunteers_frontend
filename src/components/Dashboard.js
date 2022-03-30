import React, { useEffect, useState } from 'react';
import Organization from './Organization';
import Task from './Task';


function Dashboard() {
 
    const [organizations, setOrganizations] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:8080/organizations")
        .then(res => res.json())
        .then(data => {
            setOrganizations(data);
        })
    }, [])

    return (
        <div className='dbbg'>
        <h2 className='db'> DashBoard </h2>
        <div className='boxes'>
        <Organization organizations={organizations} />
        <Task />
        </div>
        </div>
    );
}

export default Dashboard;