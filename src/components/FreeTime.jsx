const FreeTime = () => {

  const me = {
    title: 'En mi tiempo libre me gusta',
    name:'Comer',
    movie:'Salir',
    music:'Leer'
  }

  return(
    <div className="card bg-blue">
      <h2>{me.title}</h2>
      <ul>
        <li>{me.name}</li>
        <li>{me.movie}</li>
        <li>{me.music}</li>
      </ul>
    </div>
  )
}

export default FreeTime;