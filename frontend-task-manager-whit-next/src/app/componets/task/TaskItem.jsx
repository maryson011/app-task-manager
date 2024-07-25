import PropTypes from 'prop-types'

const TaskItem = ({ description, isCompleted, onClick }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-zinc-900 mx-20 my-3 p-3'>
            <h1>{description}</h1>
            <div>
                {
                    isCompleted ?
                    "Finalizado" : 
                    <button onClick={onClick}>Pendente</button>
                }
            </div>
        </div>
    )
}

// TaskItem.propTypes = {
//     description: PropTypes.string.isRequired,
//     isCompleted: PropTypes.bool.isRequired,
// }
export default TaskItem