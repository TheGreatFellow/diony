//Deprecated
const Mosiac = () => {
  return (
    <div>
      <body>
        <header>Header</header>
        <main>
          <nav>Side nav</nav>
          <article>
            <div className="container">
              <div className="card small">one</div>
              <div className="card medium">two</div>
              <div className="card small">four</div>
              <div className="card small">four</div>
              <div className="card small">four</div>
              <div className="card medium">three</div>
              <div className="card medium">five</div>
              <div className="card small">six</div>
              <div className="card small">seven</div>
              <div className="card small">eight</div>
              <div className="card medium">nine</div>
            </div>
          </article>
          <aside>SideBar</aside>
        </main>
      </body>

      <style jsx>{`
        body {
          font-size: 20px;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        article {
          flex: 4;
          padding-top: 3rem;
          background-color: green;
        }
        .container {
          width: 75vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, 12px);
          grid-auto-rows: 12px;
          grid-gap: 5px;
        }
        .card {
          background-color: blue;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .small {
          grid-row-end: span 15;
          grid-column-end: span 15;
        }
        .medium {
          grid-row-end: span 30;
          grid-column-end: span 30;
        }
        header {
          background-color: #5070b5;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        main {
          display: flex;
          height: 100%;
        }

        aside {
          background-color: #b95f21;
          padding-top: 3rem;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Mosiac;
