let id = 0;

export const getId = () => {
  console.log(`get-id.ts - line: 4 ->> getId`, id)
  
  return id++;
};
