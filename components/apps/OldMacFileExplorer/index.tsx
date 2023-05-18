import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import FileExplorer from "./FileExplorer";
import Window from "./Window";

const OldMacFileExplorer: FC<ComponentProcessProps> = ({ id }) => {
  return (
    <Window id={id}>
      <FileExplorer id={id} />
    </Window>
  );
};

export default OldMacFileExplorer;
