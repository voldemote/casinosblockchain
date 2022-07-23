import { Box, Modal, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IProps {
    open: boolean,
    handleClose: VoidFunction
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth > 768 ? "500px" : '70%',
    bgcolor: 'background.paper',
    border: "0.3rem solid #3e5740",
    borderRadius: '2rem',
    padding: "5.5rem 1rem 1rem 1rem",
};

const ICORejectModal = (props: IProps) => {
    const { t } = useTranslation();
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            <Box sx={style}>
                <div className="text-center">
                    <img src="assets/images/Redux_icon_color.png" alt="" style={{ maxWidth: "90px", height: "auto", marginTop: "-125px" }} />
                    <div className="h2" style={{ color: "#3e5740" }}>{t("thanks_interest")}</div>
                </div>
                <div className="text-center" style={{ marginTop: "30px" }}>
                    <button className="btn nsbtn" onClick={props.handleClose}>{t("okay")}</button>
                </div>
            </Box>
        </Modal>

    )
}

export default ICORejectModal;