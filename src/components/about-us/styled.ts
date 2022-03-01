import { styled } from "@/styled"
import topIllus from "@/images/top-illus.png"
import bottomIllus from "@/images/bottom-illus.png"

export const AboutUsStyled = styled("div", {
  position: "relative",
  "&:after": {
    background: `url(${topIllus}) no-repeat`,
    backgroundSize: "cover",
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    height: 80,
    content: "' '",
  },
  "&:before": {
    background: `url(${bottomIllus}) no-repeat`,
    backgroundSize: "cover",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: -84,
    height: 130,
    content: "' '",
  },
})
