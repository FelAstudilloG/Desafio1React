const Titulo= (props)=> {
return(
    <h1 style={{backgroundColor: props.colorFondo}}> Hola  {props.nombre}  {props.apellido}! </h1>

);
};

export default Titulo;