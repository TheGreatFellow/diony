// import style from "../styles/GridLayout.module.css";
import Image from "next/image";

function GridLayout() {
  return (
    <div>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500&display=swap');
        </style>
      </head>
      <body className="container">
        <div className="card-container">
          <div className="card"></div>
          <div className="card medium">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/xaPepCVepCg/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="med text"> Alan!! Alaaan!</div>
          </div>
          <div className="card ">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/xaPepCVepCg/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="sm text"> Alan!! Alaaan!</div>
          </div>
          <div className="card ">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/xaPepCVepCg/maxresdefault.jpg"
                width="340px"
                height="200px"
              />
            </div>
            <div className="sm text"> Alan!! Alaaan!</div>
          </div>
          <div className="card ">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="sm text"> Alan!! Alaaan!</div>
          </div>
          <div className="card medium">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="med text"> Alan!! Alaaan!</div>
          </div>
          <div className="card "></div>
          <div className="card ">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="sm text"> Alan!! Alaaan!</div>
          </div>

          <div className="card ">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="sm text"> Alan!! Alaaan!</div>
          </div>
          <div className="card "></div>

          <div className="card "></div>
          <div className="card ">
            <div className="image-container">
              <Image
                src="https://i.ytimg.com/vi/qDsrlWpFNZQ/maxresdefault.jpg"
                width="900px"
                height="500px"
              />
            </div>
            <div className="sm text"> Alan!! Alaaan!</div>
          </div>
          <div className="card medium"></div>
          <div className="card medium"></div>
          <div className="card "></div>
          <div className="card "></div>
        </div>
      </body>

      <style jsx>
        {`
          .container {
            margin-left: 2vw;
            margin-top: 3vw;
            background-color: #ecf0f3;
          }
          body::-webkit-scrollbar {
            width: 10px;
          }
          body::-webkit-scrollbar-track {
            background: #ecf0f3;
          }
          body::-webkit-scrollbar-thumb {
            background: #593b3c;
          }
          .card-container {
            margin: 0;
            padding-top: 40px;
            width: 80vw;

            background-color: #ecf0f3;
            display: grid;
            grid-template-columns: repeat(80, 1vw);
            grid-auto-rows: 1vw;
            justify-content: center;
          }

          @media screen and (max-width: 800) {
            .card-container {
              width: 100vw;
              background-color: blue;
            }
          }

          .image-container {
            overflow: hidden;
            border-radius: 1.3vw;
            font-size: 0px;
          }

          .card {
            margin: 0.9vw;
            padding: 1vw;
            border-radius: 1.3vw;
            grid-row-end: span 20;
            grid-column-end: span 20;
            background: linear-gradient(
              134.77deg,
              #f6f7f8 1.74%,
              #dbe7f0 96.12%
            );
            box-shadow: inset -6px -6px 4px rgba(87, 73, 73, 0.2),
              inset 6px 6px 4px rgba(255, 255, 255, 0.67);
            transition: all 0.2s ease-in-out;
            overflow: hidden;
          }
          .card:active {
            box-shadow: 4px 4px 7px rgba(255, 255, 255, 0.95),
              inset 7px 7px 7px rgba(87, 73, 73, 0.21);
            background: linear-gradient(
              134.77deg,
              #f1f5f8 1.74%,
              #e2ecf3 96.12%
            );
            transform: scale(0.99);
          }

          .medium {
            grid-row-end: span 40;
            grid-column-end: span 40;
          }

          .text {
            position: relative;
            top: 1vw;
            left: 0.5vw;
            font-family: Poppins;
            font-size: 1.5vw;
            letter-spacing: 0.03em;
            font-weight: bold;
            color: #593b3c;

            text-shadow: -2px -2px 4px #ffffff, 2px 2px 4px rgba(0, 0, 0, 0.4);
          }
        `}
      </style>
    </div>
  );
}

export default GridLayout;
