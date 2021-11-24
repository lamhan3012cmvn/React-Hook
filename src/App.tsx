import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useInView from './hooks/useInView'

function App() {
  const [count, setCount] = useState(0)
  const headerRef = React.useRef<any>()
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '200px',
    threshold: 0.15
  }
  const inView = useInView(headerRef,options)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <h1>
          {inView ? 'inView' : 'not inView'}
        </h1>
        <div ref={headerRef}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consectetur labore possimus commodi soluta. Minus suscipit recusandae explicabo illum harum similique quod perspiciatis reprehenderit? Quas debitis delectus corporis accusantium quibusdam!</p>
        </div>
      </header>
    </div>
  )
}

export default App
