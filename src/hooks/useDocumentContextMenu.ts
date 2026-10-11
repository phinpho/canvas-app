import { use } from "react";
import { DocumentContextMenuContext } from "../contexts/DocumentContextMenuContext.js";

export const useDocumentContextMenu = () => {
  const documentContextMenuContext = use(DocumentContextMenuContext);

  if (!documentContextMenuContext) {
    throw new Error("useDocumentContextMenu must be used within a <DocumentContextMenuProvider>");
  }

  return documentContextMenuContext;
};
