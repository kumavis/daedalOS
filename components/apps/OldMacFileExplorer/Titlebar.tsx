import rndDefaults from "components/system/Window/RndWindow/rndDefaults";
import useTitlebarContextMenu from "components/system/Window/Titlebar/useTitlebarContextMenu";
import useWindowActions from "components/system/Window/Titlebar/useWindowActions";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import useDoubleClick from "hooks/useDoubleClick";
import { useCallback, useRef } from "react";
import Button from "styles/common/Button";
import { LONG_PRESS_DELAY_MS, PREVENT_SCROLL } from "utils/constants";
import { haltEvent, label } from "utils/functions";
import StyledTitlebar from "./StyledTitlebar";

type TitlebarProps = {
  id: string;
};

const Titlebar: FC<TitlebarProps> = ({ id }) => {
  const {
    processes: { [id]: process },
  } = useProcesses();
  const {
    allowResizing = true,
    closing,
    componentWindow,
    hideMaximizeButton,
    hideMinimizeButton,
    title,
  } = process || {};
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const { onClose, onMaximize } = useWindowActions(id);
  const onClickMaximize = useDoubleClick(onMaximize);
  const titlebarContextMenu = useTitlebarContextMenu(id);
  const touchStartTimeRef = useRef<number>(0);
  const touchStartPositionRef = useRef<DOMRect>();
  const touchesRef = useRef<TouchList>();
  const onTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLHeadingElement>) => {
      const { x, y } = componentWindow?.getBoundingClientRect() || {};

      if (
        Date.now() - touchStartTimeRef.current >= LONG_PRESS_DELAY_MS &&
        touchStartPositionRef.current &&
        touchStartPositionRef.current.x === x &&
        touchStartPositionRef.current.y === y
      ) {
        titlebarContextMenu.onContextMenuCapture(
          Object.assign(event, {
            touches: touchesRef.current,
          })
        );
      }
    },
    [componentWindow, titlebarContextMenu]
  );
  const onTouchStart = useCallback(
    ({ touches }: React.TouchEvent<HTMLHeadingElement>) => {
      if (componentWindow) {
        componentWindow.blur();
        componentWindow.focus(PREVENT_SCROLL);
        touchStartTimeRef.current = Date.now();
        touchStartPositionRef.current = componentWindow.getBoundingClientRect();
        touchesRef.current = touches as unknown as TouchList;
      }
    },
    [componentWindow]
  );

  return (
    <StyledTitlebar
      $foreground={isForeground}
      className={rndDefaults.dragHandleClassName}
      onDragOver={haltEvent}
      onDrop={haltEvent}
      {...titlebarContextMenu}
    >
      <nav className="cancel">
        <Button
          $short={hideMaximizeButton && hideMinimizeButton}
          className="close"
          onClick={onClose}
          {...label("Close")}
        />
      </nav>
      <Button
        as="h1"
        {...(allowResizing && !closing ? onClickMaximize : {})}
        onTouchEndCapture={onTouchEnd}
        onTouchStartCapture={onTouchStart}
      >
        <figure>
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
    </StyledTitlebar>
  );
};

export default Titlebar;
