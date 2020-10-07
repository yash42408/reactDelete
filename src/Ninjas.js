import React from 'react';
const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjasList = ninjas.map(ninjas => {
    if (ninjas.age > 20) {
      return (
        <div className="ninja" key={ninjas.email}>
          <div>Name :{ninjas.name}</div>
          <div>age :{ninjas.age}</div>
          <div>email :{ninjas.email}</div>
          <button onClick={() => { deleteNinja(ninjas.email) }}>Delete</button>
        </div>
      )
    }
    else {
      return null
    }
  })
  return (
    <div className="ninja-list">
      {ninjasList}
    </div>
  )
}
export default Ninjas