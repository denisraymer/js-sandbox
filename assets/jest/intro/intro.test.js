const {sum, nativeNull} = require('./intro');

describe('Функция суммы:', () => {
  test('Должен возвращать сумму двух значений', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 3)).toEqual(5);
  });

  test('Должен возвращать правильно значение по сравнению с другими значениями', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(10);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test('Должны просуммировать правильно 2 значения с плавающей точкой', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('Собственная нулевая функция:', () => {
  test('Должно возвращать ложное значение null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undefined, null, 0, '' (В if не срабатывают, фолсе значения)
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
