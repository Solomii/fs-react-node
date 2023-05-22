function sum (a, b) {
  if (a === null || b === null) {
    return null;
  }
  const summa = Number(a) + Number(b);
  return summa > Number.MAX_SAFE_INTEGER ? Infinity : summa;
}

describe('test for function SUM', () => {
  test('add 1 to 2 to expect 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('add 10:string to 20:string to expect 30', () => {
    expect(sum('10', '20')).toBe(30);
  });

  test('add 0.1 to 0.2 to expect 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('add 0.2 to 0.3 to expect 0.5', () => {
    expect(sum(0.2, 0.3)).toBeCloseTo(0.5);
  });

  test('add Number.MAX_SAFE_INTEGER to Number.MAX_SAFE_INTEGER to expect Indinity', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(
      Infinity
    );
  });

  test('add Number.MAX_SAFE_INTEGER to Number.MAX_SAFE_INTEGER to expect Indinity', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Infinity);
  });

  test('add null to null to expect 0', () => {
    expect(sum(null, null)).toBe(null);
  });
});
