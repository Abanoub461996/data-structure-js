let x = new Map();
x.set(200,"males")
x.set(190,"fem")
x.set(120,"fem")


let max = 0;
x.forEach((el,key)=>{
    if(max<key){max=key;}
})

function largestRectangle(h) {
    // Write your code here
    const n = h.length,
    stack= [];
    let maxArea = 0;

  for (let i = 0; i < n; i++) {
      // Check if the current bar is lower than the previous bar in the stack
      while (stack.length && h[i] <= h[stack[stack.length-1]]) {
          // Calculate the area
          maxArea = Math.max(maxArea, getArea(i, h, stack));
          console.log(i,maxArea);
        }

    stack.push(i);
  }

  // Calcualte the remaining bar in the stack
  while (stack.length) {
    maxArea = Math.max(maxArea, getArea(n, h, stack));
  }

  return maxArea;
};
const getArea = (i, heights, stack) => {
    const h = heights[stack.pop()],
          w = stack.length ? i - stack[stack.length-1] - 1 : i;
  
    return h * w;
  }
console.log(largestRectangle([3,2,3]));