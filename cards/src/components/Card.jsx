const Card = ({title, item1, item2, item3, background }) => {
  return (
    <div className={`card ${background}`}>
      <h1>{title}</h1>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </div>
  );
}

export default Card;
