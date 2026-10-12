import { divide } from "../src/calculator.js";
describe("divide", () => {
  test("divides two numbers correctly", () => {
    expect(divide(2, 1)).toBe(2);
  });

  test("rejects a string as the first argument", () => {
    expect(() => divide("2", 1)).toThrow(TypeError);
  });

  test("rejects NaN", () => {
    expect(() => divide(NaN, 1)).toThrow(TypeError);
  });

  test("rejects division by zero", () => {
    expect(() => divide(2, 0)).toThrow(RangeError);
  });

  test("rejects a string as the second argument", () => {
    expect(() => divide(2, "1")).toThrow(TypeError);
  });
});