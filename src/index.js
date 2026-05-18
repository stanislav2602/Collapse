import './styles.css';
import Collapse from './Collapse';

const container = document.getElementById('collapse-container');

const contentText = `
  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
   ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt 
   sapiente ea proident.</p>`;

const collapse = new Collapse(container, contentText);