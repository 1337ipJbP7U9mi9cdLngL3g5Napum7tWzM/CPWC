import { LitElement, html } from 'lit-element';

class CpwcProgress extends LitElement {

  static get properties() {
    return {

    }
  }
  
  constructor() {
    super();
  }

  render() {
    html``;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('cpwc-progress', CpwcProgress);
