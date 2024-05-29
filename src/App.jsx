// import Navbar from './components/Navbar'
// import EbookReader from './components/EbookReader'
// import './App.css'
// import TableOfContents from './components/TableOfContents'

// const contents = [
//   'Introduction',
//   'Chapter 1: Getting started',
//   'Chapter 2: Advanced Technique'
// ]

// function App() {
// const bookPath = './assets/books/heaven-officials-blessing-pdf_heaven-officials-blessing.epub'
//   return (
//     <div className='App'>
//      <Navbar title='my ebook reader'/>
//      <div className="content-container">
//       <TableOfContents contents={contents}/>
//       <EbookReader bookPath={bookPath}/>
//      </div>
//     </div>
//   )
// }

// export default App

import CustomCard from "./components/CardComponent";
import "./App.css";

const cardData = [
  {
    title: "Card 1",
    image: "https://via.placeholder.com/300x200",
    description: "Description for Card 1",
  },
  {
    title: "Card 2",
    image: "https://via.placeholder.com/300x200",
    description: "Description for Card 2",
  },
  {
    title: "Card 3",
    image: "https://via.placeholder.com/300x200",
    description: "Description for Card 3",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Card Collection</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
