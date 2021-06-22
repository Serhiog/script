import CustomizedTooltips from "../tooltip/tooltip"
import Button from "@material-ui/core/Button"
import {Icon } from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const WhatDoYouWant = ({product}) => {
    return (
        <>
            <li className="dialog__item">
                <p className="dialog__manager">Смотрите, можем вам регулярно передавать контакты людей которые заинтересованы в покупке {product},при чем как показывает опыт, таких заявок будет минимум в 5 раз больше чем у вас есть на данный момент. То есть вопрос довольно серьезный так как речь о деньгах пойдет. Поэтому мне нужен руководитель с которым можно обсудить условия передачи таких клиентов.</p>
            </li>
        </>
    )
}

export default WhatDoYouWant