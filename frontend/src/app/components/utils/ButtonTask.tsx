import { FaCheckCircle } from 'react-icons/fa'

interface ButtonProps {
    description: string
    onClick: () => void
}

export default function buttonTask(props: ButtonProps) {
    return (
        <button 
            className='
                flex items-center gap-1
                border-zinc-500 border rounded-md
                p-1 itens-center justify-center
            '
            onClick={props.onClick}>
            <span>{props.description}</span>
        </button>
    )
}