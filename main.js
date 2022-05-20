const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ':inserta: :insertb: :insertc:';
const insertA = ['Willy the Goblin', 'Big Daddy', 'Santa'];
const insertB = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertC = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const aItem = randomValueFromArray(insertA);
  const bItem = randomValueFromArray(insertB);
  const cItem = randomValueFromArray(insertC);

  newStory = newStory.replace(':inserta:', aItem);
  newStory = newStory.replace(':insertb:', bItem);
  newStory = newStory.replace(':insertc:', cItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
