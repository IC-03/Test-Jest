const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
    expect(sum(-1,2)).toBe(1);
});

test('adds -1 -2 to equal -3', () => {
    expect(sum(-1,-2)).toBe(-3);
});

test('adds 1 -2 to equal -1', () => {
    expect(sum(1,-2)).toBe(-1);
});

test('adds 2 + 2 to equal 5', () => {
    expect(sum(2,2)).toBe(5);
});