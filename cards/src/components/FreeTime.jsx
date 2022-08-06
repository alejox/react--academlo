const FreeTime = () => {

  const me = {
    title: 'En mi tiempo libre me gusta',
    name:'Comer',
    movie:'Salir',
    music:'Leer'
  };

  const click = () =>{
    alert('Tiempo libre');
  }

  return(
    <div className="card bg-blue" onClick={click}>
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