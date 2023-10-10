export const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 5, // Adds equal spacing between all elements
    backgroundColor: "#1B4B66",
    fontSize: 14,
    p: 3,
    fontFamily: "Inter",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    marginBottom: 3, // Controls spacing between the three containers vertically
  },
  link: {
    color: "#B6B6B6",
    textDecoration: "none",
  },
  iconContainerDesktop: {
    marginBottom: 1,
    display: "flex",
    gap: 1,
    justifyContent: "flex-end",
    // Remove marginBottom here or adjust it as needed
  },
  iconContainerMobile: {
    display: "flex",
    marginBottom: 1,
    gap: 1,
    justifyContent: "flex-start",
    // Remove marginBottom here or adjust it as needed
  },
  heading: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: 16,
  },
  divider: {
    backgroundColor: "#FFFFFF",
    marginBottom: 2,
    marginTop: 2,
    marginLeft: -10,
  },
  location: {
    fontSize: 14,
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 2,
    gap: 5,
  },
};
