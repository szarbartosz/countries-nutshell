import React from 'react'

const Filter = ({ filter, filterChangeHandler, countries }) => {
  return (
    <div>
      <h4>Filter the results ({countries.filter(country => new RegExp(filter, 'i').test(country.name)).length})</h4>
      <form>
        <div className="form-group">
          <input value={filter} onChange={filterChangeHandler} className="form-control" placeholder="type some letters..." />
        </div>
      </form>  
    </div>
  )
}

export default Filter