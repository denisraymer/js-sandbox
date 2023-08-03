// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/typescript

export function solution(str: string, ending: string): boolean {
  if (!ending) return true

  const strSubstring = str.substring(str.length - ending.length)

  return strSubstring === ending
}

// str.endsWith(ending);
