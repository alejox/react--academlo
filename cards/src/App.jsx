import './App.css';
import Card from './components/Card';



function App() {
  

  return (
    <div className='app'>
      <Card 
      title='Sobre mi'
      item1='Alejandro'
      item2='Pelicula favorita: Matrix'
      item3='Musica: Rock'
      background='bg-green'
      />
      <Card 
      title='Mis hobbies'
      item1='Musica'
      item2='Ejercicio'
      item3='Leer'
      background='bg-red'      />
      <Card 
      title='En mi tiempo libre me gusta'
      item1='Comer'
      item2='Salir con amigos'
      item3='Jugar video juegos'
      background='bg-blue'      
      />
      <Card 
      title='Mi comida favorita'
      item1='Pasta'
      item2='Suchi'
      item3='Hamburguesa'
      background='bg-orange'
      />
      <Card 
      title='Mi stack es'
      item1='HTML'
      item2='CSS'
      item3='JavaScript'
      background='bg-yellow'
      />
    </div>
  );
}

export default App;
