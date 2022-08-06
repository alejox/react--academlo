const AboutMe = ({name}) => {
  const me = {
    title: 'Sobre mí',
    name,
    movie: 'Matrix',
    music: 'Rock',
  };

  const click = () => {
    alert('Sobre mi')
  }

  return (
    <div className='card bg-green' onClick={click}>
      <h2>{me.title}</h2>
      <ul>
        <li>{me.name}</li>
        <li>{me.movie}</li>
        <li>{me.music}</li>
      </ul>
    </div>
  );
};

export default AboutMe;
