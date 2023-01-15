/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */



  function updateText(){
    let text = document.getElementById('text-input').value;
    document.getElementById('text-output').textContent = text;
}
  console.log(document.getElementById('text-input').value);

  function makeBold(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }
  
  function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  function makeUnderline(elem){
    // elem.classList.toggle('active');
    // document.getElementById('text-output').classList.toggle('underline');
    var check = document.getElementById('text-output').classList;

    if (check.contains('underline', 'active')) 
      check.remove('underline', 'active');
    else
      check.add('underline', 'active');
  }
  
  function alignText(elem, alignType){
    elem.classList.toggle('active');
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonList = document.getElementsByClassName('align');
    for(let i = 0; i<buttonList.length; i++)
      buttonList[i].classList.remove('active');
  }