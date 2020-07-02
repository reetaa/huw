import { generateLinearValues, generateRandomValues } from "./generate";

describe("Generate Linear RGB Values", () => {
  const valueLength = 32768;
  const mockGenerateLinearValues = jest.fn(generateLinearValues);
  mockGenerateLinearValues();
  const linearValue = mockGenerateLinearValues.mock.results[0].value;

  test("Generate RGB values is called", () => {
    expect(mockGenerateLinearValues).toHaveBeenCalled();
  });

  test("Value length is 32768", () => {
    expect(linearValue.length).toBe(valueLength);
  });

  test("Values are unique", () => {
    const randomSampleA = [...linearValue[32000]].join("");
    const randomSampleB = [...linearValue[7777]].join("");
    expect(randomSampleA).not.toMatch(randomSampleB);
  });

  test("Value is calculated with 32 steps", () => {
    expect(valueLength % 32).toBe(0);
  });

  test("Value has three elements", () => {
    expect(linearValue[0].length).toBe(3);
  });

  test("Number is calculated with 8 bits", () => {
    expect(linearValue[0][0] % 8).toBe(0);
    expect(linearValue[7][2] % 8).toBe(0);
  });
});

describe("Generate Random RGB Values", () => {
  const valueLength = 32768;
  const mockGenerateRandomValues = jest.fn(generateRandomValues);
  mockGenerateRandomValues();
  const randomValue = mockGenerateRandomValues.mock.results[0].value;

  test("Generate random RGB values is called", () => {
    expect(mockGenerateRandomValues).toHaveBeenCalled();
  });

  test("Value length is 32768", () => {
    expect(randomValue.length).toBe(valueLength);
  });

  test("Value is random", () => {
    const mockGenerateLinearValues = jest.fn(generateLinearValues);
    mockGenerateLinearValues();
    expect(mockGenerateRandomValues).toHaveBeenCalled();
    const linearValue = mockGenerateLinearValues.mock.results[0].value;
    const linearSample = [...linearValue[200]].join("");
    const randomSampleB = [...randomValue[200]].join("");
    expect(linearSample).not.toMatch(randomSampleB);
  });
});
