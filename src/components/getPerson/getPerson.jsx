import { connect } from "react-redux"
import { ActionCreator } from "../../store/action"
import { Card, CardActionArea } from "@material-ui/core"
import ButtonsVariants from "../buttons-variants/buttonts-variants"
import { Mocks } from "../../mocks"
import WithMe from "./withMe"
import ConnectWithBoss from "./connectWithBoss"
import WhatDoYouWant from "./whatDoYouWant"

const setNextStep = ActionCreator.setIsCalculate

const GetPerson = ({ name, product, setNextStep, isCalculate, actualBtn }) => {

    const handleNextBtn = (evt) => {
        evt.preventDefault()
        setNextStep(evt.target.dataset.name)
    }

    return (
        <ul className="dialog__list dialog__list--getPerson">
            <Card component="li" className="dialog__item" style={{ borderRadius: "20px" }}>
                <CardActionArea>
                    <p className="dialog__manager">Здравствуйте, меня {name || <span className="dialog__noValue">ИМЯ</span>} зовут, звоню по поводу <span className="dialog__attention">передачи клиентов</span>. У нас есть заинтересованные клиенты в покупке {product || <span className="dialog__noValue">ПРОДУКТ</span>} . Готовы передавать их вам на определенных условиях. С кем можно обсудить финансовый вопрос и условия передачи?</p>
                </CardActionArea>
            </Card>
            <ButtonsVariants variantButtons={Mocks.getPersonBtns()} />
            {actualBtn === "withMe" && <WithMe
                handleNextBtn={handleNextBtn}
                isCalculate={isCalculate}
            />}
            {actualBtn === "connectWithBoss" && <ConnectWithBoss
                name={name}
                product={product}
                handleNextBtn={handleNextBtn}
                isCalculate={isCalculate} />}
            {actualBtn === "whatDoYouWant" && <WhatDoYouWant product={product}/>}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    isCalculate: state.getPerson.isCalculate,
    actualBtn: state.getPerson.actualBtn,
    name: state.initialInputs.managerName,
    product: state.initialInputs.product
})

export default connect(mapStateToProps, { setNextStep })(GetPerson)
