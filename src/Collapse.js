export default class Collapse {
  constructor(container, contentHtml) {
    this.container = container;
    this.isOpen = false;
    
    this.button = document.createElement('button');
    this.button.className = 'collapse-btn';
    this.button.textContent = 'Collapse';
    
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'collapse-wrapper';
    
    this.content = document.createElement('div');
    this.content.className = 'collapse-content';
    this.content.style.position = 'relative';
    this.content.style.paddingBottom = '35px';
    
    if (contentHtml) {
      this.content.innerHTML = contentHtml;
    }
    
    this.copyBtn = document.createElement('button');
    this.copyBtn.className = 'copy-btn';
    this.copyBtn.textContent = 'Copy';
    
    this.content.appendChild(this.copyBtn);
    this.wrapper.appendChild(this.content);
    this.container.appendChild(this.button);
    this.container.appendChild(this.wrapper);
    
    this.button.addEventListener('click', () => {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    });
    
    this.copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const paragraphs = this.content.querySelectorAll('p');
      let text = '';
      paragraphs.forEach(p => {
        text += p.innerText + '\n';
      });
      navigator.clipboard.writeText(text.trim()).then(() => {
        this.copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          this.copyBtn.textContent = 'Copy';
        }, 1500);
      });
    });
    
    this.close();
  }
  
  setContent(html) {
    this.content.innerHTML = html;
    this.content.appendChild(this.copyBtn);
  }
  
  open() {
    if (this.isOpen) return;
    
    const height = this.content.offsetHeight;
    this.wrapper.style.height = height + 'px';
    this.isOpen = true;
  }
  
  close() {
    if (!this.isOpen) return;
    
    const height = this.content.offsetHeight;
    this.wrapper.style.height = height + 'px';
    
    this.wrapper.offsetHeight;
    
    this.wrapper.style.height = '0';
    this.isOpen = false;
  }
}