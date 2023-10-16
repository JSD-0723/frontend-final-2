import cardImage from "../data/Assets/image_elyas.png";

export const HandPickedStyles = {
  cardStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    background: `url(${cardImage}) center/cover no-repeat`,
    minHeight: "286px",
    borderRadius: "20px",

    width: "100%",
  },
  textStyles: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#171520",
    fontFamily: "Inter",
    fontWeight: 600,
    p: 2,
  },

  categoryText: {
    fontFamily: "Inter",
    fontWeight: 600,
    color: "#171520",
  },

  container: {
    backgroundColor: "#1B4B66",
    paddingTop: 1,
    paddingBottom: 6,
    marginBottom: 1,
  },
  title: {
    color: "white",
    margin: 2,
    paddingBottom: 1,
    fontFamily: "Inter",
    fontWeight: 600,
  },
};
