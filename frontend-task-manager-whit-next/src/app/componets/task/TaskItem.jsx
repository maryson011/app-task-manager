import { FaCheckCircle } from 'react-icons/fa'
import ButtonTask from "../button/Button"

const TaskItem = ({ description, isCompleted, onClick }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-zinc-900 mx-20 my-3 p-3'>
            <h1>{description}</h1>
            <div>
                {
                    isCompleted ?
                    <FaCheckCircle size={25} className='text-green-600'/> :
                    <ButtonTask texto="Pendente" onClick={onClick}/>
                }
            </div>
        </div>
    )
}

export default TaskItem