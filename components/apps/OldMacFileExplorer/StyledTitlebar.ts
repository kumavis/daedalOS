import type { DefaultTheme } from "styled-components";
import styled from "styled-components";

// old mac aesthetics based on https://www.hypertalking.com/

type StyledTitlebarProps = {
  $foreground: boolean;
};

const styledBorder = ({
  $foreground,
  theme,
}: StyledTitlebarProps & { theme: DefaultTheme }): string =>
  $foreground
    ? `1px solid ${theme.colors.titleBar.background}`
    : `1px solid ${theme.colors.titleBar.backgroundInactive}`;

const StyledTitlebar = styled.header<StyledTitlebarProps>`
  background-color: #fff;
  border-bottom: ${styledBorder};
  display: flex;
  height: 16px;
  position: relative;
  top: 0;
  z-index: 2;

  image-rendering: pixelated;
  background-image: url(//www.hypertalking.com/wp-content/themes/hypertalking/images/titlebar-bg-tile@2x.png);
  background-repeat: repeat-x;
  background-size: 1px 15px;
  line-height: 15px;
  padding: 1px;

  h1 {
    color: ${({ $foreground, theme }) =>
      $foreground
        ? theme.colors.titleBar.text
        : theme.colors.titleBar.textInactive};
    display: flex;
    flex-grow: 1;
    justify-content: center;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      position: relative;

      picture {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin-right: ${({ theme }) => theme.sizes.titleBar.iconMarginRight};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #fff;
        padding: 0 6px;
        color: #000;
      }
    }
  }

  nav {
    display: flex;
    background-color: #fff;
    border: solid 1px #fff;
    display: block;
    position: absolute;
    top: 1px;
    left: 7px;

    button {
      border-left: ${styledBorder};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      background-image: url(//www.hypertalking.com/wp-content/themes/hypertalking/images/close-active.png);
      background-position: -10px -10px;
      background-repeat: no-repeat;
      background-size: 9px 9px;
      border: solid 1px #000;
      display: block;
      height: 9px;
      width: 9px;
    }
  }
`;

export default StyledTitlebar;
