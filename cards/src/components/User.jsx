

const User = () => {

  const alertCard = () => {
    alert('Hiciste click');
  };

  const me = {
    about: 'Sobre mi',
    name: 'Alejandro',
    age: 33,
    movie: 'Matrix',
    music: 'Rock',
  };

  return (
    <div>
      <h1>{me.about}</h1>
        <p>
          <b>Name:</b> {me.name}
        </p>
        <p>
          <b>Age:</b> {me.age}
        </p>
        <p>
          <b>Movie:</b> {me.movie}
        </p>
        <p>
          <b>Music:</b> {me.music}
        </p>
        <button onClick={alertCard}>Click aquí</button>
    </div>
  )
}

export default User;