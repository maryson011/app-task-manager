import PropTypes from 'prop-types'

const TaskItem = ({ description, isCompleted }) => {
    const styles = {
        container: {
            border: '1px solid #ccc',
            padding: '5px 2px',
            margin: '5px auto',
        },
        heading: {
            fontSize: '20px',
        },
        paragraph: {
            color: '#333',
        },
    }
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{description}</h1>
            <div style={styles.paragraph}>
                {
                    isCompleted ?
                    "Finalizado" : 
                    <button>Pendente</button>
                }
            </div>
        </div>
    )
}

TaskItem.propTypes = {
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
}
export default TaskItem