const reverse = require("../code/rev-string");

it('should capitalize first letter in a string', () => {
  expect(reverse('code')).toBe('edoc')
});