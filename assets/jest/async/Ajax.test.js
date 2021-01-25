const Ajax = require('./Ajax');

describe('Ajax: echo', () => {
  test('Должен вернуть асинхронное значение', async () => {
    const result = await Ajax.echo('some data');
    expect(result).toBe('some data');
  });

  test('Должен вернуть промис', () => {
    return Ajax.echo('some data').then(data => {
      expect(data).toBe('some data');
    });
  });

  // Обработка ошибок
  test('Должен асинхронно поймать ошибку промиса', async () => {
    try {
      await Ajax.echo(); // Ничего не передаем для ошибки
    } catch (error) {
      expect(error.message).toBe('Error');
    }
  });

  test('Должен поймать ошибку промиса', () => {
    return Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error);
    });
  });
});
