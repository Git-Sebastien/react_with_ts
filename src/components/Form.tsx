import { Field } from "../interface/Form/FormProps"
import Button from "./Button"

const Form: React.FC <Field> = ({handleSubmit,name,inputRef}) => {
    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name={name} id="" ref={inputRef}/>
            <Button purpose="Valider" />
        </form>
    )
}

export default Form