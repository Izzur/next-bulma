import React from 'react'

export default function Home() {
  return (
    <main class="columns is-centered mt-6">
      <div class="column is-one-third">
        <h1 className="title">Bulma</h1>

        <p className="subtitle">
          Modern CSS framework based on{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
          </a>
        </p>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-medium"
              type="text"
              placeholder="Username"
            />
            <span className="icon is-left">📧</span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-medium"
              type="password"
              placeholder="Password"
            />
            <span className="icon is-left">🔑</span>
          </div>
        </div>

        <div className="buttons">
          <a className="button is-medium is-primary">Login</a>
          <a className="button is-medium is-link is-light">Forgot Password</a>
        </div>
      </div>
    </main>
  )
}
