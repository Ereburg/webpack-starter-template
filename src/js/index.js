import '@js/babel'
import '@styles/styles.css'
import '@styles/scss.scss'

class Post {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      img: this.img
    }, null, 2)
  }

  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}


const post = new Post('Webpack Post Title')
console.log('hello world');

document.querySelector('pre').textContent = `${post.toString()}`
