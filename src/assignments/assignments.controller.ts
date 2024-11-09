import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  // Assignment 1: Fibonacci Sequence
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: number): { sequence: number[] } {
    const sequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }

    return { sequence };
  }
// Assignment 2: Prime Number Checker
@Get('prime/:number')
isPrime(@Param('number') number: number): { isPrime: boolean } {
  if (number <= 1) return { isPrime: false };
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return { isPrime: false };
  }
  return { isPrime: true };
}
 // Assignment 3: Factorial Calculator
 @Get('factorial/:number')
 getFactorial(@Param('number') number: number): { factorial: number } {
   let factorial = 1;
   for (let i = 1; i <= number; i++) {
     factorial *= i;
   }
   return { factorial };
 }
}
