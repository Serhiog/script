import { FormControl, Input, InputLabel } from "@material-ui/core"
import { useState } from "react"

const Calculate = () => {

    const [visitors, setVisitors] = useState(0)
    const handleVisitors = (evt) => {
        evt.preventDefault()
        setVisitors(evt.target.value)
    }

    const [orders, setOrders] = useState(0)
    const handleOrders = (evt) => {
        evt.preventDefault()
        setOrders(evt.target.value)
    }

    const [sells, setSells] = useState(0)
    const handleSells = (evt) => {
        evt.preventDefault()
        setSells(evt.target.value)
    }


    const [count, setCount] = useState(0)
    const handleCount = (evt) => {
        evt.preventDefault()
        setCount(evt.target.value)

    }

    return (
        <ul className="dialog__list dialog__list--calculate">
            <li className="dialog__item">
                <p className="dialog__manager">Приятно познакомиться. Для того чтобы понять что мы можем в вашем случае предложить и на каких именно условиях, нужно знать <span className="dialog__attention">текущую ситуацию</span>. Скажите, вы продвигаете ваш сайт в интернете?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <p className="dialog__client">Да</p>
            </li>
            <li className="dialog__item dialog__item--system">
                <p className="dialog__manager">Ага, вам известно сколько посетителей на нем в месяц?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <FormControl variant="outlined">
                    <InputLabel htmlFor="visitors">посетители</InputLabel>
                    <Input style={{ fontSize: "20px", background: "white", borderRadius: "10px" }} className="dialog__input" onChange={handleVisitors} id="visitors"></Input>
                </FormControl>
            </li>
            <li className="dialog__item dialog__item--system">
                <p className="dialog__manager">Ага, сколько заявок ваши клиенты отправляют в месяц?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <FormControl variant="outlined">
                    <InputLabel htmlFor="requests">заявки</InputLabel>
                    <Input style={{ fontSize: "20px", background: "white", borderRadius: "10px" }} className="dialog__input" onChange={handleOrders} id="requests"></Input>
                </FormControl>
            </li>
            <li className="dialog__item dialog__item--system">
                <p className="dialog__manager">А сколько продаж из числа заявок?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <FormControl variant="outlined">
                    <InputLabel htmlFor="sells">продажи</InputLabel>
                    <Input style={{ fontSize: "20px", background: "white", borderRadius: "10px" }} className="dialog__input" onChange={handleSells} id="sells"></Input>
                </FormControl>
            </li>
            <li className="dialog__item dialog__item--system">
                <p className="dialog__manager">Ага... а средний чек какой?</p>
            </li>
            <li className="dialog__item dialog__item--client">
                <FormControl variant="outlined">
                    <InputLabel htmlFor="value">средний чек</InputLabel>
                    <Input style={{ fontSize: "20px", background: "white", borderRadius: "10px" }} className="dialog__input" onChange={handleCount} id="value"></Input>
                </FormControl>
            </li>
            <li className="dialog__item dialog__item--system">
                <p className="dialog__manager"> Понятно… <span className="dialog__item-comment">очень подробно проговариваете с клиентом:</span></p>
            </li>
            <li className="dialog__item">
                <p className="dialog__manager">То есть (Допустим) к вам на сайт заходит <span className="dialog__nums">{visitors}</span> человек. Из них заявки оставляют <span className="dialog__nums">{orders}</span>. И затем покупают <span className="dialog__nums">{sells}</span> человек со средним чеком <span className="dialog__nums">{count}р</span> . То есть общий оборот получается <span className="dialog__nums">{+count * +sells}р</span>.</p>
            </li>
            <li className="dialog__item dialog__item--manager">
                <p className="dialog__manager dialog__item--manager">Я правильно посчитала? Примерно так и есть?</p>
            </li>
            <li className="dialog__item dialog__item--client dialog__item--bottom-right">
                <p className="dialog__client">Да…</p>
            </li>
            <li className="dialog__item">
                <p className="dialog__manager">Хорошо.... теперь <span className="dialog__attention">что мы можем предложить</span> вам… смотрите, мы можем увеличить число ваших заявок примерно в 6-7 раз. То есть у вас будет не <span className="dialog__nums">{orders}</span> заявок, а примерно <span className="dialog__nums">{orders * 6}</span>. А если учесть вашу конверсию в покупку, которая в данный момент равна {!sells ? <span className="dialog__nums">0</span> : <span className="dialog__nums">{Math.floor(sells / orders * 100)}%</span>}  то количество продаж составит примерно….ммм... предлагаю посчитать по самому минимуму, путь будет в 5 раз больше заявок, а не в 6, то получается  {!sells ? <span className="dialog__nums">0</span> : <span className="dialog__nums">{Math.floor(orders * 5 * Math.floor(sells / orders * 100) / 100)}</span>} продаж. То есть вместо <span className="dialog__nums">{sells}</span> будет {!sells ? <span className="dialog__nums">0</span> : <span className="dialog__nums">{Math.floor(orders * 5 * Math.floor(sells / orders * 100) / 100)}</span>} продаж! И это по самым скромным подсчетам...</p>
            </li>
            <li className="dialog__item">
                <p className="dialog__manager">А что касаемо оборота, то он вырастет с <span className="dialog__nums">{+count * +sells}</span>р до примерно {!sells ? <span className="dialog__nums">0</span> : <span className="dialog__nums">{orders * 5 * Math.floor(sells / orders * 100) / 100 * count}</span>}
                р. ... Что скажете?</p>
            </li>
        </ul>
    )
}

export default Calculate