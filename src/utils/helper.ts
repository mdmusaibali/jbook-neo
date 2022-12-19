import { CellsState } from "../store/types/cells";

export const randomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

export const init = () => {
  // disabling Ctrl+S
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
      e.key === "s" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
    }
  });
};

type Theme = "light" | "dark";
export const checkThemeInLocalStorage = (): Theme => {
  const theme = localStorage.getItem("theme");
  if (!theme) return "light";
  if (theme === "light") {
    return "light";
  } else if (theme === "dark") {
    return "dark";
  }
  return "light";
};

const arraysEqual = (a: string[], b: string[]) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const isUploadedFileValid = (uploadedFile: CellsState) => {
  try {
    let isvalid =
      "loading" in uploadedFile &&
      "order" in uploadedFile &&
      "error" in uploadedFile &&
      "data" in uploadedFile;
    const orderArr = uploadedFile.order;
    const dataArr = Object.keys(uploadedFile.data);

    if (!arraysEqual(orderArr, dataArr)) {
      isvalid = false;
    }

    return isvalid;
  } catch (error) {
    return false;
  }
};
