const wrong = [1,2].map(num => {id: num});     // [undefined, undefined] ← mistake!
const correct = [1,2].map(num => ({id: num}));