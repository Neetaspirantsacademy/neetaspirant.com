const mytopics = {
  topic1: {
    name: "THE LIVNG WORLD",
    url: "https://drive.google.com/file/d/1qWQQmsbkFbTWYC2JjzqZEOKLWmxNcO_6/view?usp=sharing"
  },
  topic2: {
    name: "topic name",
    url: "aff.dsf"
  },
  topic3: {
      name: "topic name",
      url: "asdf.sdfd"
    },
  topic4: {
      name: "topic name",
      url: "asdf.sdfd"
    },
  topic5: {
      name: "topic name",
      url: "asdf.sdfd"
    },
  topic6: {
      name: "topic name",
      url: "asdf.sdfd"
    },
  topic7: {
      name: "topic name",
      url: "asdf.sdfd"
    }
  // Add more topics as needed
};

// Container where the cards will be displayed
const cardContainer = document.getElementById('cardContainer');

// Generate cards from your own dictionary
let ihtml = "";
for (const topickey in mytopics) {
  const topic = mytopics[topickey];

  ihtml += `
    <div class="card " style="width: 18rem; margin:10px">
      <img class="card-img-top" src="biology.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${topic.name}</h5>
        <p class="card-text"><a href="${topic.url}">Visit here</a></p>
      </div>
    </div>
  `;
}

// Update the card container with the generated HTML
cardContainer.innerHTML = ihtml;

cardContainer.style.flexWrap = 'wrap';
