import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 820,
        fontSize: theme.typography.pxToRem(33),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

export default function CustomizedTooltips({ text }) {
    return (
        <div style={{ display: "inline" }}>
            <HtmlTooltip
                enterDelay={500} leaveDelay={200}
                title={
                    <>
                        <Typography>Подсказка</Typography>
                        {"Необходимо с серьезным выражением прочитать эту формулировку так как нам нужен именно РУКОВОДИТЕЛЬ"}
                    </>
                }
            >
                <Button><span className="dialog__attention">{text}<InfoIcon style={{ color: "green", width: "22px", height: "22px" }} /></span></Button>
            </HtmlTooltip>
        </div>
    );
}