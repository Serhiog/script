import { useState } from "react"

const Script = () => {

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
        <div className="wrapper">
            <h1 className="title">Скрипт отдела</h1>
            <div className="inner">
                <p className="text manager">Здравствуйте, меня … зовут, звоню по поводу <span className="attention">передачи клиентов</span>. У нас есть заинтересованные клиенты в покупке … . Готовы передавать их вам на определенных условиях. С кем можно обсудить финансовый вопрос и условия передачи?</p>

                <p className="text system">Если с вами продолжают говорить:</p>
                <p className="text client">Со мной.</p>
                <p className="text manager"> Как вас зовут? Какую должность занимаете?</p>
                <p className="text client"> Иван. Менеджер.</p>
                <p className="text manager">Вы принимаете <span className="attention">финансовые решения</span> в вашей компании?</p>
                <p className="text client">Переключаю на ЛПР…</p>

                <p className="text system">Если переключают на ЛПР:</p>
                <p className="text manager">Здравствуйте, меня … зовут, компания ВонтРезалт, я по поводу <span className="attention">передачи клиентов</span>. У нас есть <span className="attention">заинтересованные клиенты</span> в покупке … . Готовы передавать их вам на определенных условиях. С вами можно обсудить?</p>
                <p className="text client">Да, да со мной</p>

                <p className="text system">Если вы изначально говорили с ЛПР:</p>
                <p className="text manager">Хорошо, как вас зовут?</p>
                <p className="text client">Меня зовут .... .</p>
                <p className="text manager">Приятно познакомиться. Для того чтобы понять что мы можем в вашем случае предложить и на каких именно условиях, нужно знать <span className="attention">текущую ситуацию</span>. Скажите, вы продвигаете ваш сайт в интернете?</p>
                <p className="text client">Да</p>
                <p className="text manager">Ага, вам известно сколько посетителей на нем в месяц?</p>
                <input className="input" onChange={handleVisitors}></input>
                <p className="text manager">Ага, сколько заявок ваши клиенты отправляют в месяц?</p>
                <input className="input" onChange={handleOrders}></input>
                <p className="text manager">А сколько продаж из числа заявок?</p>
                <input className="input" onChange={handleSells}></input>
                <p className="text manager">Ага... а средний чек какой?</p>
                <input className="input" onChange={handleCount}></input>
                <p className="text manager"> Понятно… очень подробно проговариваете с клиентом:</p>
                <p className="text manager">То есть (Допустим) к вам на сайт зашло <span className="nums">{visitors}</span> человек. Из них заявку оставило <span className="nums">{orders}</span>. И затем купило <span className="nums">{sells}</span> человек со средним чеком <span className="nums">{count}р</span> . То есть общий оборот получается <span className="nums">{+count * +sells}р</span>.</p>
                <p className="text manager">Я правильно посчитала? Примерно так и есть?</p>
                <p className="text client">Да…</p>
                <p className="text manager">Хорошо.... теперь <span className="attention">что мы можем предложить</span> вам… смотрите, мы можем увеличить число ваших заявок примерно в 6-7 раз. То есть у вас будет не <span className="nums">{orders}</span> заявок, а <span className="nums">{orders * 6}</span>. А если учесть вашу конверсию в покупку, которая равна <span className="nums">{Math.floor(sells / orders * 100)}%</span> то количество продаж составит примерно….ммм... предлагаю посчитать по самому минимуму, путь будет в 5 раз больше заявок, а не в 6, то получается <span className="nums">{Math.floor(orders * 5 * Math.floor(sells / orders * 100) / 100)}</span> продаж. То есть вместо <span className="nums">{sells}</span> будет <span className="nums">{Math.floor(orders * 5 * Math.floor(sells / orders * 100) / 100)}</span> продаж! И это по самым скромным подсчетам...</p>
                <p className="text manager">А что касаемо оборота, то он вырастет с <span className="nums">{+count * +sells}</span>р до <span className="nums">{orders * 5 * Math.floor(sells / orders * 100) / 100 * count}</span>р. ... Что скажете?</p>
            </div>
        </div>
    )
}

export default Script