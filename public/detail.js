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
        text: 'How marketing can help you boost your business',
        category: 'Marketing',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermiyas'
    }
];


const params = new URLSearchParams(window.location.search);
const title = params.get('title');


const guide = guideList.find(g => g.title === title);


if (guide) {
    const guideDetail = document.getElementById('guideDetail');
    guideDetail.innerHTML = `
        <img src="${guide.image}" alt="${guide.title}">
        <h2>${guide.title}</h2>
        <p>${guide.text}</p>
        <p><strong>Category:</strong> ${guide.category}</p>
        <p><strong>Submitted by:</strong> ${guide.submittedBy}</p>
    `;
    document.getElementById('guideTitle').innerText = guide.title;
}


document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});
