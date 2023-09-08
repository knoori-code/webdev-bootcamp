/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    /* Pass your questions in here. */
    {
      message: "What site do you want to convert?: ",
      name: "URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!  Answer should be a website url. 
    console.log(answers);

    const qr_png = qr.image(answers.URL, { type: 'png' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
