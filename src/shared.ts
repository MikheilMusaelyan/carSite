export function checkInput(input: string | number) {
    if (typeof input === 'number') {
      return input > 0;
    } else if (typeof input === 'string') {
      return input.trim();
    }
    return false;
}