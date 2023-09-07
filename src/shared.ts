export function checkInput(input: string | number) {
    if (typeof input === 'number') {
      return input > 0;
    } else if (typeof input === 'string') {
      return input.trim();
    }
    return false;
}

export const animtaionPreference = (i: number, animation: string) => {
  if (animation == 'slidLeft') {
    return {
      transform: 'translateX(50px)',
      opacity: 0
    };
  } else if (animation == 'appear') {
    return {
      opacity: 0
    };
  } else if (animation == '') {
    return { 
      transition: `550ms ${i * 90}ms`,
      opacity: 1,
      transform: 'translate(0, 0)'
    };
  }
}