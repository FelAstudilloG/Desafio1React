import Header from "./components/Header";
import Card from "./components/Card";
import './App.css';
import Footer from "./components/Footer";
import imagenes from './assets/imagenes';

function App(){
  return (
    <main>
      <Header texto_titulo="Galería de Imágenes con React"/>
      <Card
        img={imagenes.img1}
        titulo='Playstation 1'
        descripcion='PlayStation (プレイステーション Pureisutēshon, oficialmente abreviada como PS1, PS o PSX) es una consola de videojuegos desarrollada y comercializada por Sony Computer Entertainment' />
        <Card
        img={imagenes.img2}
        titulo='Vino Casillero del Diablo Dark Red 750cc.'
        descripcion='Vino tinto ensambale de color rojo intenso y profundo, especial para carnes rojas y comidas picantes.' />
        <Card
        img={imagenes.img3}
        titulo='Vino Casillero del Diablo Dark Red 750cc.'
        descripcion='Vino tinto ensambale de color rojo intenso y profundo, especial para carnes rojas y comidas picantes.' />
        <Card
        img={imagenes.img4}
        titulo='Vino Casillero del Diablo Dark Red 750cc.'
        descripcion='Vino tinto ensambale de color rojo intenso y profundo, especial para carnes rojas y comidas picantes.' />
        <Card
        img={imagenes.img5}
        titulo='Vino Casillero del Diablo Dark Red 750cc.'
        descripcion='Vino tinto ensambale de color rojo intenso y profundo, especial para carnes rojas y comidas picantes.' />
        <Card
        img={imagenes.img6}
        titulo='Vino Casillero del Diablo Dark Red 750cc.'
        descripcion='Vino tinto ensambale de color rojo intenso y profundo, especial para carnes rojas y comidas picantes.' />
    <Footer />
    </main>
   
  );
};
export default App;