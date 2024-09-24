const guideList = [
    {
        title: 'Brainstorm Business Ideas',
        text: 'Finding your niche is key. Here is how to do it...',
        category: 'Business Models',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermi'
    },
    {
        title: 'Marketing',
        text: 'How marketing can help you boosting your business',
        category: 'Marketing ',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermiyas'
    }
];

const guideListElement = document.getElementById('listsOfGuide')
guideList.forEach((tip) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${tip.image}" alt="${tip.title}">
    <h3>${tip.title}</h3>
    <p>${tip.text}</p>
    <button onclick="viewDetail('${tip.title}')">View Details</button>
    `;
    guideListElement.appendChild(card)
});

// function viewDetail(title,){
//     alert(`Details about: ${title}`)
// }
function viewDetail(title) {
    window.location.href = `detail.html?title=${encodeURIComponent(title)}`;
}
