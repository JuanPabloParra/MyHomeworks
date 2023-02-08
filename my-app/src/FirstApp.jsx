import PropTypes from 'prop-types';
export const FirstApp = ({title, sum}) => {
    return(
        <>
        <h1> { title } </h1>
        <span> {sum}</span>
        
        </>
    )
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    title: "no hay titulo",
    sum: 300
}
