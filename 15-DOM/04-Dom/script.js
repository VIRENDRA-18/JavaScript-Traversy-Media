function addLangauge(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.langauge').
    appendChild(li)
}

addLangauge('Python');
addLangauge('TypeScript');

function addOptiLangauge (langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.langauge').appendChild(li)
}
addOptiLangauge('Java');
addOptiLangauge('Rust');
addOptiLangauge('go');

// Edit

const secondLang = document.querySelector('li:nth-child(2)');
 
// secondLang.innerHTML = 'Mojo';

const newli = document.createElement('li');
newli.textContent = 'HTML';
secondLang.replaceWith(newli);

// edit

const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TYPESCRIPT</li>';


// remove

const lastLang = document.querySelector('li:last-child')
lastLang.remove();


