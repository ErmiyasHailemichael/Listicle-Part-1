const guideList = [
    {
        title: 'Brainstorm Business Ideas',
        text: 
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim placerat curabitur leo fusce vestibulum. Lorem ipsum odor amet, consectetuer adipiscing elit. Hac urna donec integer mattis curabitur dictum maximus nostra. Efficitur proin sagittis vivamus ultrices; vehicula lacus. Nec porttitor urna nascetur malesuada per magna. Sollicitudin aptent vulputate rhoncus netus hendrerit; venenatis dapibus phasellus ac. Hendrerit fusce mollis rutrum luctus molestie. Nunc pellentesque ornare luctus erat maximus scelerisque sit rhoncus . Suscipit interdum ut quam habitasse rhoncus. Curae posuere himenaeos faucibus cursus; fusce nibh phasellus vivamus. Diam pretium egestas potenti ultrices aliquet risus. Sagittis nunc condimentum dui venenatis volutpat nulla nostra facilisi. Ornare lacus ullamcorper consequat nibh tortor.',
        category: 'Business Models',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermi'
    },
    {
        title: 'Marketing',
        text: 'Nisl mauris libero cras porta egestas fermentum orci. Cursus maximus eu nam nullam primis vestibulum adipiscing arcu sagittis. Maecenas augue vestibulum blandit elit aliquam. Dis semper blandit arcu; curabitur morbi quam. Class class nisl felis aliquet ullamcorper semper. Nisi varius proin dapibus ullamcorper neque velit.',
        category: 'Marketing ',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermiyas'
    },
    {
        title: 'Branding',
        text: 'Nisl mauris libero cras porta egestas fermentum orci. Cursus maximus eu nam nullam primis vestibulum adipiscing arcu sagittis. Maecenas augue vestibulum blandit elit aliquam. Dis semper blandit arcu; curabitur morbi quam. Class class nisl felis aliquet ullamcorper semper. Nisi varius proin dapibus ullamcorper neque velit.',
        category: 'Marketing ',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermiyas'
    },
    {
        title: 'How to leverage Social media',
        text: 'Nisl mauris libero cras porta egestas fermentum orci. Cursus maximus eu nam nullam primis vestibulum adipiscing arcu sagittis. Maecenas augue vestibulum blandit elit aliquam. Dis semper blandit arcu; curabitur morbi quam. Class class nisl felis aliquet ullamcorper semper. Nisi varius proin dapibus ullamcorper neque velit.',
        category: 'Marketing ',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermiyas'
    },
    {
        title: 'The Art of Selling',
        text: 'Nisl mauris libero cras porta egestas fermentum orci. Cursus maximus eu nam nullam primis vestibulum adipiscing arcu sagittis. Maecenas augue vestibulum blandit elit aliquam. Dis semper blandit arcu; curabitur morbi quam. Class class nisl felis aliquet ullamcorper semper. Nisi varius proin dapibus ullamcorper neque velit.',
        category: 'Marketing ',
        image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        submittedBy: 'Ermiyas'
    }
];

function limitSentences (text, numSentences) {
    const textSentences = text.split('.').slice(0,numSentences).join('.');
    return textSentences.length < text.length ? textSentences + '...' : textSentences;
}

const guideListElement = document.getElementById('listsOfGuide')
guideList.forEach((tip) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${tip.image}" alt="${tip.title}">
    <h3>${tip.title}</h3>
    <p>${limitSentences(tip.text, 4)}</p>
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
