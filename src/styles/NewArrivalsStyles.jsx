import cardImage from "../data/Assets/image_elyas.png";

export const newArrivasStyles = {
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

  container: {
    backgroundColor: "white",
    paddingTop: 1,
    paddingBottom: 6,
    marginBottom: 1,
  },
  title: {
    color: "#13101E",
    margin: 2,
    marginBottom: 3,

    fontFamily: "Inter",
    fontWeight: 600,
  },
};
