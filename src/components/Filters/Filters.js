
import './Filters.css';

function Filter({onFilter}) {
    return (
        <ul className="filters">
           <li className="filter" onClick={() => onFilter(null)}>All</li>
           <li className="filter" onClick={() => onFilter("active")}>Active</li>
           <li className="filter" onClick={() => onFilter("completed")}>Completed</li>
        </ul>
    )
}

export default Filter;