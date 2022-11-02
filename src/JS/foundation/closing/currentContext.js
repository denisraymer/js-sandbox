let x = 10
function foo(a) {
  let b = 20

  function bar(c) {
    let d = 30
    return boop(x + a + b + c + d)
  }

  function boop(e) {
    return e * -1
  }

  return bar
}

let moar = foo(5) // Closure
/*
  Функция ниже выполняет панель функций, которая была возвращена,
  когда мы выполнили функцию foo в строке выше. Функциональная панель вызывает Boop,
   после чего панель приостанавливается, и Boop выдвигается
   на вершину стека вызовов (см. Скриншот ниже).
*/
moar(15)
