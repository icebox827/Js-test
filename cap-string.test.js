const capitalize = require("./cap-string");

it('should capitalize first letter in a string', () => {
  expect(capitalize('google')).toBe('Google')
});