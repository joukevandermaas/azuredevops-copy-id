(() => {
  const tileIdRegex = /tile\-(\d+)/

  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC' && event.ctrlKey) {
      // user pressed Ctrl+C, so we find the card they hover
      let cards = document.querySelectorAll('.tbTile:hover');

      if (!cards || !cards.length) {
        return;
      }

      // there can only be one
      let hoveredCard = cards[0];
      let [_, id] = hoveredCard.id.match(tileIdRegex);

      navigator.clipboard.writeText(id);
    }
  });
})()

