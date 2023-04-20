import { ButtonProps } from "../interface/ButtonProps"

const Button :React.FC <ButtonProps> = ({purpose,handleClick}) => {
    return(
        <button onClick={handleClick}>{purpose}</button>
    )
}

export default Button