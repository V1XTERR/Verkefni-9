// TODO leit í API
// TODO Sýna niðurstöður á síðunni
import  { el, empty }  from "../src/lib/elements.js";


const artSearcher = document.querySelector('.art-searcher');

const statusElement = el('p', {}, "Sláðu inn leitarorð til að byrja")

const resultsElement = el('ul')
const resultElement = el('div', {}, statusElement, resultsElement) 


const inputElement = document.createElement
('input')
inputElement.setAttribute('name', 'query')

/**
 *
 *  @param {Event} e  Form submit event.
 * 
 */

async function onSubmitHandler(e) {
    e.preventDefault();
    empty(resultsElement);
}


    const query = inputElement.value;
    statusElement.textContent = `Leitað að: ${query}...`;

    await sleep (0.5);
    const results = await search(query);
    statusElement.textContent = `Leitarniðurstöður fyrir ${query}.`;

    const resultitems = el('li', {}, query)
    resultsElement.appendChild(resultitems)
}

const fromElement = el(
    "form",
    {submit: onSubmitHandler},
    el("label", {}, "Leitarorð:"),
    inputElement,
    el("button", {type: "submit"}, "Leita")
);

artSearcher?.appendChild(fromElement);
artSearcher?.appendChild(resultsElement);