import PropTypes from 'prop-types';

const Filter = ( { setFilter } ) => {
  return (
    <div className="filter">
      <div>
        <h3>MY Todos</h3></div>
      <div>
        <label htmlFor="filter"><h3>Status Filter:</h3> </label>
        <select id="filter" style={{ backgroundColor: "pink" }} onChange={( e ) => setFilter( e.target.value )} defaultValue="all">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Notcompleted</option>
        </select>
      </div>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default Filter;
