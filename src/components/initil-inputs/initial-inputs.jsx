
import { FormControl, Input, InputLabel, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action"
import TemporaryDrawer from "../side/side";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const setNewName = ActionCreator.setNewName
const setNewProduct = ActionCreator.setNewProduct

const InitialInputs = ({ setNewName, setNewProduct }) => {

    const handleName = (evt) => {
        evt.preventDefault()
        setNewName(evt.target.value)
    }

    const handleProduct = (evt) => {
        evt.preventDefault()
        setNewProduct(evt.target.value)
    }

    return (
        <Paper elevation={5} className="inputs">
            <div className="inputs__inner">
                <p className="inputs__title">Вводные данные</p>
                <FormControl variant="outlined" style={{ marginBottom: "20px" }}>
                    <InputLabel className="inputs__name-label" htmlFor="name"><PermIdentityIcon style={{ marginBottom: "-5px", marginRight: "3px" }} />Имя менеджера:</InputLabel>
                    <Input label="Outlined secondary" style={{ fontSize: "20px", background: "RGB(255, 218, 224)", borderRadius: "10px", borderBottom: "none" }} className="inputs__name-input" id="name" onChange={handleName}></Input>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel className="inputs__name-label" htmlFor="product"><WorkOutlineIcon style={{ marginBottom: "-5px", marginRight: "3px" }} />Продукт клиента:</InputLabel>
                    <Input style={{ fontSize: "20px", background: "RGB(255, 218, 224)", borderRadius: "10px", borderBottom: "none" }} className="inputs__name-input" id="product" onChange={handleProduct}></Input>
                </FormControl>
                <TemporaryDrawer />
            </div>
        </Paper>
    )
}

export default connect(null, { setNewName, setNewProduct })(InitialInputs)