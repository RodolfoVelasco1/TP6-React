
import { FC } from "react"; 

//Creamos interface con los atributos que tendrá
interface IPropsMiPrimerComponent {
  text: string;
  color: string;
  fontSize?: number; // el signo de pregunta significa que es opcional
}

//Con "rafct" se crea automáticamente el cuerpo
//En "fontSize", eñ "|| 1" significa que si no se pasa un valor, por defecto será 1
export const MiPrimerComponent : FC<IPropsMiPrimerComponent> = ({text, color, fontSize,}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize || 1}rem`}}> <p>{text}</p></div>
  )
}
