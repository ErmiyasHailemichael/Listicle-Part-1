const guideList = [
  {
    title: "Brainstorm Business Ideas",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim placerat curabitur leo fusce vestibulum. Lorem ipsum odor amet, consectetuer adipiscing elit. Hac urna donec integer mattis curabitur dictum maximus nostra. Efficitur proin sagittis vivamus ultrices; vehicula lacus. Nec porttitor urna nascetur malesuada per magna. Sollicitudin aptent vulputate rhoncus netus hendrerit; venenatis dapibus phasellus ac. Hendrerit fusce mollis rutrum luctus molestie. Nunc pellentesque ornare luctus erat maximus scelerisque sit rhoncus . Suscipit interdum ut quam habitasse rhoncus. Curae posuere himenaeos faucibus cursus; fusce nibh phasellus vivamus. Diam pretium egestas potenti ultrices aliquet risus. Sagittis nunc condimentum dui venenatis volutpat nulla nostra facilisi. Ornare lacus ullamcorper consequat nibh tortor.",
    category: "Business Models",
    image:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    submittedBy: "Ermi",
  },
  {
    title: "Marketing",
    text: "Nisl mauris libero cras porta egestas fermentum orci. Cursus maximus eu nam nullam primis vestibulum adipiscing arcu sagittis. Maecenas augue vestibulum blandit elit aliquam. Dis semper blandit arcu; curabitur morbi quam. Class class nisl felis aliquet ullamcorper semper. Nisi varius proin dapibus ullamcorper neque velit.",
    category: "Marketing",
    image:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    submittedBy: "Ermiyas",
  },
];

const params = new URLSearchParams(window.location.search);
const title = params.get("title");

const guide = guideList.find((g) => g.title === title);

if (guide) {
  const guideDetail = document.getElementById("guideDetail");
  guideDetail.innerHTML = `
        <img src="${guide.image}" alt="${guide.title}">
        <h2>${guide.title}</h2>
        <p>${guide.text}</p>
        <p><strong>Category:</strong> ${guide.category}</p>
        <p><strong>Submitted by:</strong> ${guide.submittedBy}</p>
    `;
  document.getElementById("guideTitle").innerText = guide.title;
}

document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});
