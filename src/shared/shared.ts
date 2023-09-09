export function checkInput(input: string | number) {
    if (typeof input === 'number') {
      return input > 0;
    } else if (typeof input === 'string') {
      return input.trim();
    }
    return false;
}

export const animtaionPreference = (i: number, animation: string, animFigured: boolean) => {
  if (animation == 'slidLeft') {
    return {
      transform: 'translateX(50px)',
      opacity: 0
    };
  } else if (animation == 'appear') {
    return {
      opacity: 0
    };
  } else if (animation == '' && animFigured) {
    return { 
      transition: `transform 550ms ${i * 90}ms, opacity 550ms ${i * 130}ms`,
      opacity: 1,
      transform: 'translate(0, 0)'
    };
  }
}

export const animtaionPreferenceImage = (animation: string, delay: number,  animFigured: boolean, speed: number = 550) => {
  if (animation == 'slidLeft') {
    return {
      transform: 'translateY(100px)',
      opacity: 0
    };
  } else if (animation == 'appear') {
    return {
      opacity: 0
    };
  } else if (animation == '' && animFigured) {
    return { 
      transition: `transform ${speed}ms ${delay}ms, opacity ${speed}ms ${delay}ms`,
      opacity: 1,
      transform: 'translate(0, 0)'
    };
  }
}



export const animtaionPreferenceFromTop = (animation: string, delay: number, animFigured: boolean, speed: number = 500) => {
  if (animation == 'slidLeft') {
    return {
      transform: 'translateY(-40px)',
      opacity: 0
    };
  } else if (animation == 'appear') {
    return {
      opacity: 0
    };
  } else if (animation == '' && animFigured) {
    return { 
      transition: `transform ${speed}ms ${delay}ms ease-out, opacity ${speed}ms ${delay}ms ease-out`,
      opacity: 1,
      transform: 'translate(0, 0)'
    };
  }
}