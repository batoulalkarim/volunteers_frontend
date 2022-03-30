import React from 'react' 
import TaskCard from './TaskCard'


function Task({organizations, onClick}) {

    const taskscards = organizations.map((organization) => {
        return <TaskCard key={organization.id} organization={organization} onClick={onClick}/>
    })

    return(
        <div className='taskwrap'>
            Tasks
         {taskscards}
        </div>
    )
}

export default Task