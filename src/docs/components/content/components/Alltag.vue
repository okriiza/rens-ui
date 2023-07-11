<template>
  <h1>HTML Basics</h1>

  <h2>Formatting</h2>
  <p><strong>Bold text</strong></p>
  <p><em>Italicized text</em></p>
  <p><u>Underlined text</u></p>

  <h2>Forms and Inputs</h2>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" /><br />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" /><br />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" /><br />

    <label for="checkbox">Checkbox:</label>
    <input type="checkbox" id="checkbox" name="checkbox" /><br />

    <label for="radio1">Radio 1:</label>
    <input type="radio" id="radio1" name="radio" value="option1" /><br />

    <label for="radio2">Radio 2:</label>
    <input type="radio" id="radio2" name="radio" value="option2" /><br />

    <label for="date">Date:</label>
    <input type="date" id="date" name="date" /><br />

    <label for="file">File:</label>
    <input type="file" id="file" name="file" /><br />

    <input type="submit" value="Submit" />
  </form>

  <h2>Images</h2>
  <img src="image.jpg" alt="Image" />

  <h2>Audio/Video</h2>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg" />
  </audio>

  <video controls>
    <source src="video.mp4" type="video/mp4" />
  </video>

  <h2>Links</h2>
  <a href="https://www.example.com">Link to Example</a>

  <h2>Lists</h2>
  <ul>
    <li>Unordered List Item 1</li>
    <li>Unordered List Item 2</li>
    <li>Unordered List Item 3</li>
  </ul>

  <ol>
    <li>Ordered List Item 1</li>
    <li>Ordered List Item 2</li>
    <li>Ordered List Item 3</li>
  </ol>

  <h2>Table</h2>
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
      <tr>
        <td>Data 3</td>
        <td>Data 4</td>
      </tr>
    </tbody>
  </table>

  <h2>Styles and Semantics</h2>
  <p class="highlight">This paragraph has a custom highlight style.</p>

  <div>
    <h3>Div Section</h3>
    <p>This is a div section.</p>
  </div>

  <span>
    <h3>Span Section</h3>
    <p>This is a span section.</p>
  </span>

  <header>
    <h3>Header Section</h3>
    <p>This is a header section.</p>
  </header>

  <footer>
    <h3>Footer Section</h3>
    <p>This is a footer section.</p>
  </footer>

  <main>
    <h3>Main Section</h3>
    <p>This is the main content section.</p>
  </main>

  <section>
    <h3>Section Heading</h3>
    <p>This is a section.</p>
  </section>

  <article>
    <h3>Article Heading</h3>
    <p>This is an article.</p>
  </article>

  <aside>
    <h3>Aside Heading</h3>
    <p>This is an aside.</p>
  </aside>

  <details>
    <summary>Details</summary>
    <p>This is a details element.</p>
  </details>

  <dialog open>
    <h3>Dialog Heading</h3>
    <p>This is a dialog.</p>
    <button>Close</button>
  </dialog>

  <summary>Summary</summary>
  <p>This is a summary element.</p>

  <data value="123">Data: 123</data>
</template>
