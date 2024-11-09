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
