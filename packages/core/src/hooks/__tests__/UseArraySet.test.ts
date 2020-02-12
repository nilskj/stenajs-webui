import { renderHook } from "@testing-library/react-hooks";
import { useArraySet } from "../UseArraySet";

describe("useArraySet", () => {
  describe("add", () => {
    describe("when element does not exist", () => {
      it("adds it to the list", () => {
        let list: Array<string> = [];
        const { result } = renderHook(() =>
          useArraySet<string>(list, l => (list = l))
        );
        expect(list.length).toBe(0);
        result.current.add("hello");
        expect(list.length).toBe(1);
        expect(list[0]).toBe("hello");
      });
    });
    describe("when element already exists", () => {
      it("does not change the list", () => {
        let list: Array<string> = ["hello"];
        const { result } = renderHook(() =>
          useArraySet<string>(list, l => (list = l))
        );
        expect(list.length).toBe(1);
        result.current.add("hello");
        expect(list.length).toBe(1);
      });
    });
  });
  describe("addMultiple", () => {
    it("adds missing elements to list", () => {
      let list: Array<string> = ["hello"];
      const { result } = renderHook(() =>
        useArraySet<string>(list, l => (list = l))
      );
      expect(list.length).toBe(1);
      result.current.addMultiple(["hello", "world"]);
      expect(list.length).toBe(2);
      expect(list[0]).toBe("hello");
      expect(list[1]).toBe("world");
    });
  });
  describe("remove", () => {
    describe("when element does not exist", () => {
      it("does not change the list", () => {
        let list: Array<string> = ["world"];
        const { result } = renderHook(() =>
          useArraySet<string>(list, l => (list = l))
        );
        expect(list.length).toBe(1);
        result.current.remove("hello");
        expect(list.length).toBe(1);
        expect(list[0]).toBe("world");
      });
    });
    describe("when element exists", () => {
      it("removes it from the list", () => {
        let list: Array<string> = ["hello"];
        const { result } = renderHook(() =>
          useArraySet<string>(list, l => (list = l))
        );
        expect(list.length).toBe(1);
        result.current.remove("hello");
        expect(list.length).toBe(0);
      });
    });
  });
  describe("removeMultiple", () => {
    it("adds missing elements to list", () => {
      let list: Array<string> = ["hello", "world", "bye"];
      const { result } = renderHook(() =>
        useArraySet<string>(list, l => (list = l))
      );
      expect(list.length).toBe(3);
      result.current.removeMultiple(["hello", "world"]);
      expect(list.length).toBe(1);
      expect(list[0]).toBe("bye");
    });
  });
  describe("toggle", () => {
    describe("when element does not exist in list", () => {
      it("adds it", () => {
        let list: Array<string> = ["hello"];
        const { result } = renderHook(() =>
          useArraySet<string>(list, l => (list = l))
        );
        expect(list.length).toBe(1);
        result.current.toggle("world");
        expect(list.length).toBe(2);
        expect(list[1]).toBe("world");
      });
    });
    describe("when element exists in list", () => {
      it("removes it", () => {
        let list: Array<string> = ["hello"];
        const { result } = renderHook(() =>
          useArraySet<string>(list, l => (list = l))
        );
        expect(list.length).toBe(1);
        result.current.toggle("hello");
        expect(list.length).toBe(0);
      });
    });
  });
});
