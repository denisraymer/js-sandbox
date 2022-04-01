const {map} = require('./mock');

describe('Map function:', () => {
  // Протестировать результат возвращаемый функцией MAP

  let array;
  let mockFn;

  beforeEach(() => {
    array = [1, 2, 3, 5];
    mockFn = jest.fn(x => x ** 2);

    map(array, mockFn);
  });

  test('Следует вызвать обратный вызов', () => {
    expect(mockFn).toBeCalled();
  });

  test('Следует вызвать обратный вызов 4 раза', () => {
    expect(mockFn).toBeCalledTimes(4);
    expect(mockFn.mock.calls.length).toBe(4);
  });

  test('Должен получить 3 элемент', () => {
    expect(mockFn.mock.results[3].value).toBe(25); // Значения '5' после возведения в квадрат
  });

  test('Should mockFn mock', () => {
    mockFn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('42');

    expect(mockFn()).toBe(100);
    expect(mockFn()).toEqual(200);
    expect(mockFn()).toEqual('42');
    expect(mockFn()).toEqual('42');
  });
});
