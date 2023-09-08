export function checkInput(input: string | number) {
    if (typeof input === 'number') {
      return input > 0;
    } else if (typeof input === 'string') {
      return input.trim();
    }
    return false;
}

export const animtaionPreference = (i: number, animation: string, ) => {
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

export const animtaionPreferenceImage = (animation: string, delay: number, speed: number = 550) => {
  console.log(animation)
  if (animation == 'slidLeft') {
    return {
      transform: 'translateY(100px)',
      opacity: 0
    };
  } else if (animation == 'appear') {
    return {
      transform: 'scale(0.7)',
      opacity: 0
    };
  } else if (animation == '') {
    return { 
      transition: `${speed}ms ${delay}ms`,
      opacity: 1,
      transform: 'translate(0, 0)'
    };
  }
}



export const animtaionPreferenceFromTop = (animation: string, delay: number, speed: number = 500) => {
  console.log(animation)
  if (animation == 'slidLeft') {
    return {
      transform: 'translateY(-40px)',
      opacity: 0
    };
  } else if (animation == 'appear') {
    return {
      transform: 'scale(0.7)',
      opacity: 0
    };
  } else if (animation == '') {
    return { 
      transition: `${speed}ms ${delay}ms ease-out`,
      opacity: 1,
      transform: 'translate(0, 0)'
    };
  }
}