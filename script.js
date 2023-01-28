/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */



  updateText = () => {
    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').textContent = text;
}
  console.log(document.getElementById('text-input').value);

  makeBold = (elem) =>{
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }
  
  makeItalic = (elem) =>{
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  makeUnderline = (elem) =>{
    // elem.classList.toggle('active');
    // document.getElementById('text-output').classList.toggle('underline');
    let check = document.getElementById('text-output').classList;

    if (check.contains('underline', 'active')) 
      check.remove('underline', 'active');
    else
      check.add('underline', 'active');
  }
  
  alignText = (elem, alignType) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign = alignType;
    let alignButtons = document.getElementsByClassName('align');
    for(let button of alignButtons){
      button.classList.remove('active');
    }
  }

  