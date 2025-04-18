// Preset tier data
const tierData = {
  "S": [
    { name: "Item 1", img: "https://placehold.co/100/orange/fff", note: "My top pick!" },
    { name: "Item 2", img: "https://placehold.co/200/dodgerblue/fff", note: "My second pick!" }
  ],
  "A": [
    { name: "Item 3", img: "https://placehold.co/150x100/green/fff", note: "Great choice overall." }
  ],
  "B": [],
  "C": [],
  "D": []
};


const colors = [
  "#FF7F7F",
  "#FFBF7F",
  "#FFDF7F",
  "#FFFF7F",
  "#BFFF7F",
  "#7FFF7F",
  "#7FFFFF",
  "#7FBFFF",
  "#7F7FFF",
  "#FF7FFF",
  "#BF7FBF",
  "#CFCFCF",
];


const tooltip = document.getElementById("tooltip");



const settingsModal = document.querySelector(".settings-modal");
const colorsContainer = settingsModal.querySelector(".colors");
const tiersContainer = document.querySelector(".tiers");
const cardsContainer = document.querySelector(".cards");

let activeTier;

const resetTierImages = (tier) => {
  const images = tier.querySelectorAll(".items img");
  images.forEach((img) => {
    cardsContainer.appendChild(img);
  });
};

const handleDeleteTier = () => {
  if (activeTier) {
    resetTierImages(activeTier);
    activeTier.remove();
    settingsModal.close();
  }
};

const handleClearTier = () => {
  if (activeTier) {
    resetTierImages(activeTier);
    settingsModal.close();
  }
};

const handlePrependTier = () => {
  if (activeTier) {
    tiersContainer.insertBefore(createTier(), activeTier);
    settingsModal.close();
  }
};

const handleAppendTier = () => {
  if (activeTier) {
    tiersContainer.insertBefore(createTier(), activeTier.nextSibling);
    settingsModal.close();
  }
};

const handleSettingsClick = (tier) => {
  activeTier = tier;

  // populate the textarea
  const label = tier.querySelector(".label");
  settingsModal.querySelector(".tier-label").value = label.innerText;

  // select the color
  const color = getComputedStyle(label).getPropertyValue("--color");
  settingsModal.querySelector(`input[value="${color}"]`).checked = true;

  settingsModal.showModal();
};

const handleMoveTier = (tier, direction) => {
  const sibling =
    direction === "up" ? tier.previousElementSibling : tier.nextElementSibling;

  if (sibling) {
    const position = direction === "up" ? "beforebegin" : "afterend";
    sibling.insertAdjacentElement(position, tier);
  }
};

const handleDragover = (event) => {
  event.preventDefault(); // allow drop

  const draggedImage = document.querySelector(".dragging");
  const target = event.target;

  if (target.classList.contains("items")) {
    target.appendChild(draggedImage);
  } else if (target.tagName === "IMG" && target !== draggedImage) {
    const { left, width } = target.getBoundingClientRect();
    const midPoint = left + width / 2;

    if (event.clientX < midPoint) {
      target.before(draggedImage);
    } else {
      target.after(draggedImage);
    }
  }
};

const handleDrop = (event) => {
  event.preventDefault(); // prevent default browser handling
};

const createTier = (label = "Change me", items = []) => {
  const tierColor = colors[tiersContainer.children.length % colors.length];

  const tier = document.createElement("div");
  tier.className = "tier";
  tier.innerHTML = `
  <div class="label" contenteditable="plaintext-only" style="--color: ${tierColor}">
    <span>${label}</span>
  </div>
  <div class="items"></div>
  <div class="controls">
    <button class="settings"><i class="bi bi-gear-fill"></i></button>
    <button class="moveup"><i class="bi bi-chevron-up"></i></button>
    <button class="movedown"><i class="bi bi-chevron-down"></i></button>
  </div>
  `;

  // Attach event listeners for tier controls
  tier.querySelector(".settings").addEventListener("click", () => handleSettingsClick(tier));
  tier.querySelector(".moveup").addEventListener("click", () => handleMoveTier(tier, "up"));
  tier.querySelector(".movedown").addEventListener("click", () => handleMoveTier(tier, "down"));
  tier.querySelector(".items").addEventListener("dragover", handleDragover);
  tier.querySelector(".items").addEventListener("drop", handleDrop);

  // If there are preset items, add them to the tier
  if (items.length > 0) {
    const itemsContainer = tier.querySelector(".items");
    items.forEach(item => {
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.draggable = true;
      // Drag event listeners (same as in initDraggables)
      img.addEventListener("dragstart", (e) => {
         e.dataTransfer.setData("text/plain", "");
         img.classList.add("dragging");
      });
      img.addEventListener("dragend", () => img.classList.remove("dragging"));
      // Tooltip event listeners
      img.addEventListener("mouseenter", (e) => {
         tooltip.innerText = item.note;
         tooltip.style.display = "block";
         tooltip.style.left = `${e.pageX + 10}px`;
         tooltip.style.top = `${e.pageY + 10}px`;
      });
      img.addEventListener("mouseleave", () => {
         tooltip.style.display = "none";
      });
      itemsContainer.appendChild(img);
    });
  }

  return tier;
};

const initColorOptions = () => {
  colors.forEach((color) => {
    const label = document.createElement("label");
    label.style.setProperty("--color", color);
    label.innerHTML = `<input type="radio" name="color" value="${color}" />`;
    colorsContainer.appendChild(label);
  });
};

// Allow users to upload images
const imageUpload = document.getElementById("image-upload");
imageUpload.addEventListener("change", (event) => {
  const files = event.target.files;
  for (const file of files) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.alt = file.name;
    img.draggable = true;
    
    // Add similar event listeners as in initDraggables()
    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", "");
      img.classList.add("dragging");
    });
    img.addEventListener("dragend", () => img.classList.remove("dragging"));
    img.addEventListener("dblclick", () => {
      if (img.parentElement !== cardsContainer) {
        cardsContainer.appendChild(img);
        cardsContainer.scrollLeft = cardsContainer.scrollWidth;
      }
    });
    
    // Append the new image to the cards container
    cardsContainer.appendChild(img);
  }
});

const initDefaultTierList = () => {
  // Instead of using an array of labels, iterate over your preset tierData keys
  Object.keys(tierData).forEach(label => {
    tiersContainer.appendChild(createTier(label, tierData[label]));
  });
};


const initDraggables = () => {
  const images = cardsContainer.querySelectorAll("img");
  images.forEach((img) => {
    img.draggable = true;

    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", "");
      img.classList.add("dragging");
    });

    img.addEventListener("dragend", () => img.classList.remove("dragging"));

    img.addEventListener("dblclick", () => {
      if (img.parentElement !== cardsContainer) {
        cardsContainer.appendChild(img);
        cardsContainer.scrollLeft = cardsContainer.scrollWidth;
      }
    });
  });
};

initDraggables();
initDefaultTierList();
initColorOptions();

//* event listeners

// Event listener that creates a new tier when the h1 is clicked
// document.querySelector("h1").addEventListener("click", () => {
//   tiersContainer.appendChild(createTier());
// });

settingsModal.addEventListener("click", (event) => {
  // if the clicked element is the settings modal then close it
  if (event.target === settingsModal) {
    settingsModal.close();
  } else {
    const action = event.target.id;
    const actionMap = {
      delete: handleDeleteTier,
      clear: handleClearTier,
      prepend: handlePrependTier,
      append: handleAppendTier,
    };

    if (action && actionMap[action]) {
      actionMap[action]();
    }
  }
});

settingsModal.addEventListener("close", () => (activeTier = null));

settingsModal
  .querySelector(".tier-label")
  .addEventListener("input", (event) => {
    if (activeTier) {
      activeTier.querySelector(".label span").textContent = event.target.value;
    }
  });

colorsContainer.addEventListener("change", (event) => {
  if (activeTier) {
    activeTier
      .querySelector(".label")
      .style.setProperty("--color", event.target.value);
  }
});

cardsContainer.addEventListener("dragover", (event) => {
  event.preventDefault();

  const draggedImage = document.querySelector(".dragging");
  if (draggedImage) {
    cardsContainer.appendChild(draggedImage);
  }
});

cardsContainer.addEventListener("drop", (event) => {
  event.preventDefault();
  cardsContainer.scrollLeft = cardsContainer.scrollWidth;
});