import { FaCheckCircle } from 'react-icons/fa'
const buttonTask = ({texto, onClick}) => {
    return (
        <button 
        className='flex items-center gap-1'
        onClick={onClick}>
            <span>{texto}</span>
        </button>
    )
}

export default buttonTask