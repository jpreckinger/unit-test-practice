const sum = require('./sumTwo');

test('sum of 1 and 1 should give 2', () => {
    expect( sum(1,1) ).toBe(2);
})

test('sum of -1.5 and 3 should give 1.5', () => {
    expect( sum(-1.5,3) ).toBe(1.5);
})