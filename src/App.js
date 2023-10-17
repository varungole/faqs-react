import './App.css';
import Header from './components/Header';
import Question from './components/Question';

function App() {

  const questions = [
    {
      id: 1,
      title: 'Is this a good product?',
      ans: 'Yes, this is a good product! Do not hesitate to buy'
    },
    {
      id: 2,
      title: 'How much does it cost?',
      ans: 'It costs just $29.99, it is a steal to be honest'
    },
    {
      id: 3,
      title: 'Where can I get it?',
      ans: 'You can get it at your nearest CVS!'
    },

  ]


  return (
    <div className="App">
     <Header />
     <div className='container'>
      <h1>Frequently asked questions</h1>
      <div className='actual-questions'>
        {questions.map( (question) => (
          <Question key={question.id} title={question.title} ans={question.ans}/>
        ))}
      </div>
     </div>
    </div>
  );
}

export default App;
