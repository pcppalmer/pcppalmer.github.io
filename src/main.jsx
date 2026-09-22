import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const github = 'https://github.com/pcppalmer';
function Arrow() { return <span aria-hidden="true">↗</span>; }
function Orbit() {
  return <div className="orbital" aria-hidden="true">
    <div className="orbit-grid" />
    <div className="sphere">{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ '--i': i }} />)}<b /><b /><b /></div>
    <div className="orbit-ring"><span /></div>
    <span className="cross cross-one">+</span><span className="cross cross-two">+</span>
  </div>;
}
function App() {
  const [filter, setFilter] = useState('All projects');
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="shell">
      <header><a className="wordmark" href="#" aria-label="Patrick Palmer home">pp<span>.</span></a><nav aria-label="Main navigation"><a href="#projects">Projects</a><a href={github}>GitHub <Arrow /></a></nav></header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> A SMALL CORNER OF THE INTERNET</p><h1 id="hero-title">Patrick<br />Palmer<span className="period">.</span></h1><a className="explore" href="#projects">Explore my projects <span aria-hidden="true">↓</span></a></div>
          <Orbit />
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><div><p className="eyebrow">STUFF I WORKED ON</p><h2 id="projects-title">Projects<span className="muted"> / 02</span></h2></div><div className="filters" role="group" aria-label="Filter projects">{['All projects', 'Web', 'Games'].map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div></div>
          <div className="projects-grid">
            {filter !== 'Games' && <article className="project"><a className="project-art logged-art" href="https://thiswillbelogged.com/" aria-label="Visit This Will Be Logged"><div className="art-top"><Arrow /></div><div className="log-lines" aria-hidden="true"><span className="active-log">001 <i>this will be logged<span className="cursor">_</span></i></span></div><div className="art-bottom"><span className="tiny-dot" /> THISWILLBELOGGED.COM<span>↗</span></div></a><div className="project-info"><div className="project-title"><h3><a href="https://thiswillbelogged.com/">This Will Be Logged</a></h3><span className="tag">WEB PROJECT</span></div><p>A project with a name that speaks for itself.</p><div className="project-links"><a href="https://thiswillbelogged.com/">Visit website <Arrow /></a><a href={`${github}/thiswillbelogged`}>Source code <Arrow /></a></div></div></article>}
            {filter !== 'Web' && <article className="project"><a className="project-art goblin-art" href="https://patrickpalmer.xyz/goblin-order-rush/" aria-label="Play Goblin Order Rush"><div className="art-top"><Arrow /></div><div className="game-art" aria-hidden="true"><div className="spark spark-one">✦</div><div className="spark spark-two">✧</div><strong>GOBLIN<br /><em>ORDER RUSH</em></strong><code><span>SELECT</span> * <span>FROM</span> inventory;</code></div></a><div className="project-info"><div className="project-title"><h3><a href="https://patrickpalmer.xyz/goblin-order-rush/">Goblin Order Rush</a></h3><span className="tag">BROWSER GAME</span></div><p>Run a goblin shop and learn a little SQL.<br />Turn queries into gold, one order at a time.</p><div className="project-links"><a href="https://patrickpalmer.xyz/goblin-order-rush/">Play the game <Arrow /></a><a href={`${github}/goblin-order-rush`}>Source code <Arrow /></a></div></div></article>}
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Patrick Palmer</span><a href="#">Back to top ↑</a></footer>
    </div>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
