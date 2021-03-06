import { RefObject, useEffect } from "react";

export const useSelectAllOnMount = (
  ref: RefObject<HTMLInputElement>,
  moveCursorToEnd: boolean,
  enabled: boolean
) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (ref.current?.type === "number" || ref.current?.type === "date") {
      return;
    }

    if (enabled) {
      ref.current.setSelectionRange(0, ref.current!.value.length);
    } else if (moveCursorToEnd) {
      ref.current.setSelectionRange(
        ref.current.value.length,
        ref.current.value.length
      );
    }
  }, [moveCursorToEnd, ref, enabled]);
};
