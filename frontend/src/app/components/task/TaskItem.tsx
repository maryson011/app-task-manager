import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever, MdPendingActions } from "react-icons/md";
import ButtonTask from "@/app/components/utils/ButtonTask";

interface TaskProps {
  description: string
  isCompleted: boolean
  update: () => void
  delete: () => void
}

export default function TaskItem(props: TaskProps) {
  return (
    <div className="flex justify-between items-center">
      <span>{props.description}</span>
      <div className="flex items-center gap-3">
        {props.isCompleted ? 
          <FaCheckCircle size={25} className="text-green-700" onClick={props.update}/> : 
          <MdPendingActions size={25} className="text-orange-700" onClick={props.update}/>}
          <MdDeleteForever size={25} className="text-red-700" onClick={props.delete}/>
      </div>
    </div>
  );
}
