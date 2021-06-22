import CustomizedTooltips from "../tooltip/tooltip"
import Button from "@material-ui/core/Button"
import { Icon } from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const ConnectWithBoss = ({ name, product, handleNextBtn, isCalculate }) => {
    return (
        <>
            <li className="dialog__item dialog__item--manager">
                <p className="dialog__manager">Здравствуйте, как к вам обращаться? Вы руководитель?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <p className="dialog__client">Представляется...</p>
            </li>
            <li className="dialog__item dialog__item--manager">
                <p className="dialog__manager">Вы принимаете <CustomizedTooltips text={"финансовые решения"} /> в компании?</p>
            </li>
            <li className="dialog__item">
                <p className="dialog__manager">Отлично, меня {name || <span className="dialog__noValue">ИМЯ</span>} зовут, компания ВонтРезалт, я по поводу <span className="dialog__attention">передачи клиентов</span>. У нас есть <span className="dialog__attention">заинтересованные клиенты</span> в покупке {product || <span className="dialog__noValue">ПРОДУКТ</span>} . Готовы передавать их вам на определенных условиях. С вами можно обсудить?</p>
            </li>
            <li className="dialog__item dialog__item--btn">
                <Button onClick={handleNextBtn} endIcon={<Icon><ArrowDropDownIcon/></Icon>} size="large" disabled={isCalculate} variant="contained" color="primary" className="dialog__get-person-btn" data-name="calculate" >Далее Расчет</Button>
            </li>
        </>
    )
}

export default ConnectWithBoss