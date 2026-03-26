/// <reference types="cypress" />

declare namespace Editor {
  import('../src/core/engine/index')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import Editor from '../src/core/engine/index'
}

declare namespace Cypress {
  interface Chainable {
    getEditor(): Chainable<Editor>
  }
}
