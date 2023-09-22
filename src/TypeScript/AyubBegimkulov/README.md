# Продвинутый TypeScript

[YOUTUBE](https://www.youtube.com/watch?v=27BfaFgME2o&list=PL8fK_R8Bd4mgR7p72qguSqpEwrPwMR4-8)

## Советы по TypeScript

1. Понимание того как "работает" компилятор. Почему код X - неправильный, а код Y правильный
2. Покрывать как можно больше сложных кейсов в TS
   - Универсальные типы
   - Object keys 
   - Object entries
3. Понимание TS и его странных ошибок

## Определенные знания, которые нужно иметь

[КАРМАННАЯ КНИГА ПО TYPESCRIPT](https://typescript-handbook.ru/)

1. type guards / type assertions
2. Generics + advanced usages (HOCs, renderProps, as prop pattern)
3. unknown, never
4. Типизация библиотек и модификация глобальных типов (declare module + declare global)
5. Понимание union types, intersection types и type distribution
6. Встроенные utility типы (Omit, Pick, ReturnType)
7. Infer
8. Computed Types, string literals

## Практика

[TYPE-CHALLENGES](https://github.com/type-challenges/type-challenges)

## Type Guards

### Когда стоит использовать Type Guards

- Когда вам нужно убедиться, что значение из сторонних источников является определенного типа
(JSON.parse, catch, server response)
- Когда нужно сузить тип какого-то значения (number | undefined => number)

### Встроенные Type Guard'ы

- typeof
- if/else с версии TS (4.8)
- !== null/undefined с версии TS  (4.8)
- Оператор in с версии TS (4.9)

## Type Assertions

- Выкидывает ошибку если переданный аргумент с неправильным типом

## Unknown

- Unknown - это аналог any, который также описывает значение любого типа. Однако прежде чем совершать какие-то операции
над ним - нужно убедиться в его типизации.  

### Когда использовать unknown

Всегда, когда только можно:
- Вместо any
- Результат JSON.parse (или любая другая десиариализация в рантайме)
- Ответы от неизвестных API
- Ошибка в catch блоках

### Когда не будет работать unknown

```ts
function wrap<Fn extends (...args: unknown[]) => unknown>(fn: Fn) {
  return function wrapped(...args) {
     return fn.apply(null, args)
  } as Fn
}

wrap((a: number) => a * 2)
```

## Never

- Never - это union, у которого нет элементов. Представляет невозможный кейс на уровне типизации.

- Never возможно присвоить в любой тип 

```ts
type neverTestType = number | string | never
// neverTestType = number | string
```
