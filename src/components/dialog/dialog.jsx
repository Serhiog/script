import { connect } from "react-redux";
import GetPerson from "../getPerson/getPerson"
import Calculate from "../calculate/calculate"
import { Paper, Typography } from "@material-ui/core";

const Dialog = ({ name, product, isCalculate }) => {

    return (

        <div className="dialog">
            <Typography variant="h1" className="dialog__title" style={{ fontSize: "33px", marginBottom: "20px" }}>Скрипт отдела</Typography>
            <Paper elevation={5} className="dialog__wrapper" style={{ borderRadius: "10px" }}>
                <GetPerson
                    name={name}
                    product={product} />
                {isCalculate && <Calculate />}
            </Paper>
        </div >

    )
}

const mapStateToProps = (state) => ({
    name: state.getPerson.managerName,
    product: state.getPerson.product,
    isCalculate: state.getPerson.isCalculate
})

export default connect(mapStateToProps)(Dialog)