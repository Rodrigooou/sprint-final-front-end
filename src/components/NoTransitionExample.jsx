import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide 1.jpg';
import slide2 from '../assets/slide 2.jpg';
import slide3 from '../assets/slide 3.jpg';

function IndividualIntervalsExample() {
  const imageStyle = {
    width: '100%', // Defina a largura desejada
    height: '100%', // Defina a altura desejada
    margin: '0',
  };

  const textStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo com transparência
    color: 'white', // Cor do texto
    padding: '10px', // Espaçamento interno
    borderRadius: '10px',
  };
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
      <img src={slide1} alt="slide 1" style={imageStyle} />
        <Carousel.Caption style={textStyle}>
          <h1>Transit</h1>
          <h2>Semáforo Inteligente</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={slide2} alt="slide 2" style={imageStyle} />
        <Carousel.Caption style={textStyle}>
          <h1>Transit</h1>
          <h2>Semáforo Inteligente</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={slide3} alt="slide 3" style={imageStyle} />
        <Carousel.Caption style={textStyle}>
          <h1>Transit</h1>
          <h2>Semáforo Inteligente</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
