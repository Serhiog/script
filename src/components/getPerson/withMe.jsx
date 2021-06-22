import CustomizedTooltips from "../tooltip/tooltip"
import Button from "@material-ui/core/Button"
import {Icon } from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const WithMe = ({handleNextBtn, isCalculate}) => {
    return (
        <>
            <li className="dialog__item dialog__item--manager">
                <p className="dialog__manager">Как вас зовут? Вы руководитель?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <p className="dialog__client">Представляется...</p>
            </li>
            <li className="dialog__item dialog__item--manager">
                <p className="dialog__manager">Вы принимаете <CustomizedTooltips text={"финансовые решения"}/> в компании?</p>
            </li>
            <li className="dialog__item dialog__item--btn">
                <Button onClick={handleNextBtn} endIcon={<Icon><ArrowDropDownIcon/></Icon>} size="large" disabled={isCalculate} variant="contained" color="primary" className="dialog__get-person-btn" data-name="calculate" >Далее Расчет</Button>
            </li> 
        </>
    )
}

export default WithMe