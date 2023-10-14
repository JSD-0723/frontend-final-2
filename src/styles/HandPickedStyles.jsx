import cardImage from "../helper/Assets/image_elyas.png";

export const HandPickedStyles = {
  cardStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    background: `url(${cardImage}) center/cover no-repeat`,
    minHeight: "286px",
    width: "100%",
  },
  textStyles: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#171520",
    p: 2,
  },
};

export const GeneralStyles = {
  container: {
    backgroundColor: "#1B4B66",
    paddingTop: 1,
    paddingBottom: 6,
    marginBottom: 1,
  },
  title: {
    color: "white",
    margin: 2,
  },
};