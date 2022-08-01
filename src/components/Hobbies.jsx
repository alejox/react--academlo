const Hobbies = () => {

  const me = {
    title: 'Hoobies',
    name:'Tocar bateria',
    movie:'Estudiar',
    music:'Viajar'
  }

  return(
    <div className="card bg-red">
      <h2>{me.title}</h2>
      <ul>
        <li>{me.name}</li>
        <li>{me.movie}</li>
        <li>{me.music}</li>
      </ul>
    </div>
  )
}

export default Hobbies;