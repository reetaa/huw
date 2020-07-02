import { generateLinearValues } from "./generate";

describe("Generate RGB Values", () => {
  const valueLength = 32768;
  const mockGenerateLinearValues = jest.fn(generateLinearValues);
  mockGenerateLinearValues();
  const value = mockGenerateLinearValues.mock.results[0].value;

  test("Generate RGB values is called", () => {
    expect(mockGenerateLinearValues).toHaveBeenCalled();
  });

  test("Value length is 32768", () => {
    expect(value.length).toBe(valueLength);
  });

  test("Values are unique", () => {
    const randomSampleA = [...value[32000]].join("");
    const randomSampleB = [...value[32001]].join("");
    expect(randomSampleA).not.toMatch(randomSampleB);
  });

  test("Value is calculated with 32 steps", () => {
    expect(valueLength % 32).toBe(0);
  });

  test("Value has three elements", () => {
    expect(value[0].length).toBe(3);
  });

  test("Number is calculated with 8 bits", () => {
    expect(value[0][0] % 8).toBe(0);
    expect(value[7][2] % 8).toBe(0);
  });
});
