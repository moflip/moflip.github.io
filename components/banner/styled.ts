import { styled } from "@/styled"
import ip12 from "@/images/ip-12.png"

export const BannerStyled = styled("div", {
  position: "relative",
  overflow: "hidden",
  "&:after": {
    background: `url(${ip12}) no-repeat`,
    backgroundSize: "contain",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    content: "' '",
    minWidth: "600px",
    width: "45%",
    left: "60%",
    backgroundPosition: "bottom",
    display: "none",
    "@media (min-width: 640px)": {
      display: "block",
    },
  },
})
