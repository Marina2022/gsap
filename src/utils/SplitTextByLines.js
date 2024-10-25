// export function splitTextToLines(container) {
//   const output = document.getElementById('output');
//   output.innerHTML = ""; // Clear previous lines
//
//   const words = container.innerHTML.split(' ');
//   let tempLine = '';
//   container.innerHTML = ''; // Clear container content for accurate measurements
//
//   let lastHeight = 0;
//
//   words.forEach(word => {
//     const tempText = tempLine ? `${tempLine} ${word}` : word;
//     container.innerHTML = tempText;
//
//     // Check if adding the word increases container height, indicating a line break
//     if (container.offsetHeight > lastHeight) {
//       if (tempLine) {
//         // Append the previous line to output
//         const lineDiv = document.createElement('div');
//         lineDiv.className = 'line';
//         lineDiv.innerHTML = tempLine;
//         output.appendChild(lineDiv);
//       }
//       tempLine = word; // Start a new line
//       lastHeight = container.offsetHeight; // Update height baseline
//     } else {
//       tempLine = tempText;
//     }
//   });
//
//   // Append any remaining text as the last line
//   if (tempLine) {
//     const lineDiv = document.createElement('div');
//     lineDiv.className = 'line';
//     lineDiv.innerHTML = tempLine;
//     output.appendChild(lineDiv);
//   }
// }


//Почти норм
export function splitTextToLines(container) {
  const output = document.getElementById('output');
  output.innerHTML = ""; // Clear previous lines

  const words = container.innerHTML.split(' ');
  let tempLine = '';
  let lineHeight = 0;

  container.innerHTML = ''; // Clear container content for measurements

  words.forEach((word, index) => {
    const tempText = tempLine ? `${tempLine} ${word}` : word;
    container.innerHTML = tempText;

    // Set lineHeight based on the first line
    if (index === 0) {
      lineHeight = container.offsetHeight;
    }

    // If adding the word causes a line break, finalize the previous line
    if (container.offsetHeight > lineHeight && tempLine) {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'line';
      lineDiv.innerHTML = tempLine;
      output.appendChild(lineDiv);

      // Start a new line with the current word
      tempLine = word;
      container.innerHTML = word; // Reset container with only the current word
      lineHeight = container.offsetHeight; // Reset the baseline height
    } else {
      tempLine = tempText;
    }
  });

  // Add any remaining text as the last line
  if (tempLine) {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    lineDiv.innerHTML = tempLine;
    output.appendChild(lineDiv);
  }
}

