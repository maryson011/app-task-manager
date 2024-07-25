import PropTypes from 'prop-types'

const TaskItem = ({ description, isCompleted }) => {
    return (
        <>
            <h1>
                {description}
            </h1>
            <p>{isCompleted ? "Pendente" : "Finalizado"}</p>
        </>
    )
}

TaskItem.propTypes = {
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
}
export default TaskItem