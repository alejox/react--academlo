const Food = () => {

  const me = {
    title: 'Mi comida favorita',
    name:'Pasta',
    movie:'Hamburguesa',
    music:'Pizza'
  }

  return(
    <div className="card" style={{backgroundColor:'pink'}}>
      <h2>{me.title}</h2>
      <ul>
        <li>{me.name}</li>
        <li>{me.movie}</li>
        <li>{me.music}</li>
      </ul>
    </div>
  )
}

export default Food;