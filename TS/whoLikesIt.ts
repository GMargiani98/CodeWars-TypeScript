export const likes = (a: string[]): string => {
  const stringLength = a.length;
  let response = '';
  if (stringLength === 0) {
    response = 'no one likes this';
    return response;
  }

  if (stringLength === 1) {
    response = `${a[0]} likes this`;
    return response;
  }

  if (stringLength === 2) {
    response = `${a[0]} and ${a[1]} like this`;
    return response;
  }

  if (stringLength === 3) {
    response = `${a[0]}, ${a[1]} and ${a[2]} like this`;
    return response;
  }

  if (stringLength >= 4) {
    const others = stringLength - 2;
    response = `${a[0]}, ${a[1]} and ${others} others like this`;
    return response;
  }

  return response;
};
