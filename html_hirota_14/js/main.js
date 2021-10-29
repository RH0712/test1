// jsを記述する際はここに記載していく
window.addEventListener('DOMContentLoaded', ()=> {
    const container = document.querySelector('.leaves-container');
  
    const createLeaf = (leafClass, minSizeVal, maxSizeVal) => {
      const leafEl = document.createElement('span');
      leafEl.className = `leaf ${leafClass}`;
      const minSize = minSizeVal;
      const maxSize = maxSizeVal;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      leafEl.style.width = `${size}px`;
      leafEl.style.height = `${size}px`;
      leafEl.style.left = Math.random() * 100 + '%';
      container.appendChild(leafEl);
  
    
      setTimeout(() => {
        leafEl.remove();
      }, 8000);
    }
  
    setInterval(createLeaf.bind(this, 'leaf-1', 30, 50), 1000);
    setInterval(createLeaf.bind(this, 'leaf-2', 30, 50), 1000);
    setInterval(createLeaf.bind(this, 'leaf-3', 30, 50), 1000);
  });