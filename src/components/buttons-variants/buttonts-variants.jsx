import { Button } from "@material-ui/core"
import { connect } from "react-redux";
import {ActionCreator} from "../../store/action"

const setGetPersonBtn = ActionCreator.setGetPersonBtn

const ButtonsVariants = ({ variantButtons, setGetPersonBtn }) => {

    const handleBtn = (evt) => {
        const actualBtn = evt.target.closest("button").dataset.name;
        setGetPersonBtn(actualBtn)
    }
    return (
        <ul className="btn-variants">
            {variantButtons.map(btn => {
                return (
                    <li key={btn.id} className="dialog__item dialog__item--btn btn-variants-item">
                        <Button onClick={handleBtn} size="large" variant="contained" color="secondary" className="dialog__get-person-btn" data-name={btn.name} >{btn.text}</Button>
                    </li>
                )
            })}
        </ul>
    )
}

export default connect(null, { setGetPersonBtn })(ButtonsVariants)