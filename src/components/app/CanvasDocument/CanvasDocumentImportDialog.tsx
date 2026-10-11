import type { ComponentProps, FC } from "react";
import { Button } from "../../ui/Button/Button.js";
import { Dialog } from "../../ui/Dialog/Dialog.js";
import { DialogClose } from "../../ui/Dialog/DialogClose.js";
import { DialogContent } from "../../ui/Dialog/DialogContent.js";
import { DialogDescription } from "../../ui/Dialog/DialogDescription.js";
import { DialogFooter } from "../../ui/Dialog/DialogFooter.js";
import { DialogHeader } from "../../ui/Dialog/DialogHeader.js";
import { DialogTitle } from "../../ui/Dialog/DialogTitle.js";
import { DialogTrigger } from "../../ui/Dialog/DialogTrigger.js";

export type CanvasDocumentImportDialogProps = ComponentProps<typeof Button>;

export const CanvasDocumentImportDialog: FC<CanvasDocumentImportDialogProps> = ({
  children,
  variant = "outline",
  ...props
}) => {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant={variant} {...props} />}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Canvas</DialogTitle>
          <DialogDescription>
            Import an existing canvas from a file. Choose the file you want to import and click the
            import button to add it to your collection.
          </DialogDescription>
          <div className="py-4">
            <p>The import functionality is not yet implemented.</p>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

CanvasDocumentImportDialog.displayName = "CanvasDocumentImportDialog";
