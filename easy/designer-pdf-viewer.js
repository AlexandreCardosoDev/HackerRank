function designerPdfViewer(h, word) {
  let max = 0;
  [...word].forEach(element => {
     max = h[element.charCodeAt(0) - 97] > max ? h[element.charCodeAt(0) - 97] : max
  });
  return max * word.length 
}

console.log(designerPdfViewer(
  [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],
  "zaba"
))