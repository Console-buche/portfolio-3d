export const normalizeScreenTo3d = (x: number, y: number) => {
  return {
    x: (x * 2) / window.innerWidth - 1,
    y: (y * 2) / window.innerHeight - 1
  };
};
