import { ChangeEvent, useEffect, useRef } from "react";
import { FaDownload, FaUpload } from "react-icons/fa";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { cellsActions } from "../../store/slices/cellsSlice";
import { CellsState } from "../../store/types/cells";
import { isUploadedFileValid } from "../../utils/helper";
import { toast } from "react-toastify";

interface FileButtonsProps {
  type: "download" | "upload";
}

const FileButtons = ({ type }: FileButtonsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const cellCtx = useTypedSelector((state) => state.cells);
  const dispatch = useTypedDispatch();

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileLoad = (event: ProgressEvent<FileReader>) => {
    try {
      if (event.target?.result && typeof event.target?.result === "string") {
        const uploadedFile: CellsState = JSON.parse(event.target?.result);
        const isValidFile = isUploadedFileValid(uploadedFile);
        if (isValidFile) {
          dispatch(cellsActions.setCellState({ cells: uploadedFile }));
        } else {
          throw new Error("Invalid File");
        }
        if (fileInputRef.current?.value) fileInputRef.current.value = "";
      }
    } catch (error: any) {
      if (fileInputRef.current?.value) fileInputRef.current.value = "";
      toast.error("Invalid jsbook-neo file");
    }
  };

  const fileUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    let file: File | undefined;
    if (fileList && fileList?.length !== 0) {
      file = fileList[0];
      let reader = new FileReader();
      reader.onload = handleFileLoad;
      reader.readAsText(file);
    }
  };

  //   const fileDownloadHandler = () => {};

  useEffect(() => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(cellCtx));
    anchorRef.current?.setAttribute("href", dataStr);
    anchorRef.current?.setAttribute("download", "jsbook-neo.json");
  }, [cellCtx]);

  if (type === "download") {
    return (
      <a
        className="button--icon"
        // onClick={fileDownloadHandler}
        ref={anchorRef}
        style={{ marginRight: "1rem" }}
      >
        <FaDownload size={14} />
      </a>
    );
  } else {
    return (
      <>
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          onChange={fileUploadHandler}
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput">
          <button
            className="button--icon"
            onClick={triggerFileUpload}
            style={{ marginRight: "1rem" }}
          >
            <FaUpload size={14} />
          </button>
        </label>
      </>
    );
  }
};

export default FileButtons;
