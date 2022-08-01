const Technologies = () => {

  const me = {
    title: 'Stack',
    name:'HTML',
    movie:'CSS',
    music:'JavaScript'
  }

  return(
    <div className="card bg-yellow">
      <h2>{me.title}</h2>
      <ul>
        <li>{me.name}</li>
        <li>{me.movie}</li>
        <li>{me.music}</li>
      </ul>
    </div>
  )
}

export default Technologies;