import { PriorityNumberPipe } from './priority-number.pipe';

describe('PriorityNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PriorityNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
