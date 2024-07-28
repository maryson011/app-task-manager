import { ChangeEvent } from "react"

interface InputProps {
    plasholder: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
    return (
        <input
        className="flex p-2 bg-zinc-300 rounded-md text-zinc-900"
        type="text" 
        placeholder={props.plasholder}
        onChange={props.onChange}
        value={props.value}
        />
    )
}