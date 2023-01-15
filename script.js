/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */



  function updateText(){
    // CODE GOES HERE
    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').textContent = text;
}
  console.log(document.getElementById('text-input').value);

  function makeBold(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }
  
  /**
   * Toggle the italic class for the output text
   */
  function makeItalic(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  function makeUnderline(elem){
      //CODE GOES HERE
  }
  
  function alignText(elem, alignType){
    // CODE GOES HERE
  }