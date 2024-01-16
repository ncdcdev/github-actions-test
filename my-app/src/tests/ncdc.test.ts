import { getMessage } from "../features/ncdc";

it("ncdc messageを取得できること", () => {
  const result = getMessage();
  expect(result).toBe("こんにちは ncdcです");
});
