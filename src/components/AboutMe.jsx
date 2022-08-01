const AboutMe = () => {

  const me = {
    title: 'Sobre mí',
    name:'Alejandro',
    movie:'Matrix',
    music:'Rock'
  }

  return(
    <div className="card bg-green">
      <h2>{me.title}</h2>
      <ul>
        <li>{me.name}</li>
        <li>{me.movie}</li>
        <li>{me.music}</li>
      </ul>
    </div>
  )
}

export default AboutMe;