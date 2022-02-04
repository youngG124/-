import Subject from './components/Subject';
import CreateWord from './components/CreateWord';
import WordList from './components/WordList';
import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  // state 초기화
  const [inputs, setInputs] = useState({
      kor: '',
      en: ''
  });

  // 초기화한 kor, en을 비구조화 할당
  const { kor, en } = inputs;

  // 새로 복사한 객체 뒤에 빈칸의 값을 추가
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
        ...inputs,
        [name] : value
    });
  };

  // 단어 객체들로 이뤄진 배열 초기상태
  const [ words, setWords ] = useState([
    {
      id: 1,
      kor: '사랑하다',
      en: 'love',
      active:true
    },
    {
      id: 2,
      kor: '싫어하다',
      en: 'hate',
      active:false
    },
    {
      id: 3,
      kor: '관리하다',
      en: 'manage',
      active:false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    if (kor!=='' && en!=='') {
      const word = {
        id: nextId.current,
        kor,
        en
      };
      setWords([...words, word]);
  
      setInputs({
        kor:'',
        en:''
      });
      nextId.current += 1;
    }else{
      alert('칸을 채우세요!');
    }
  };

  const onRemove = id => {
    setWords(words.filter(word => word.id !== id));
  };

  const onToggle = id => {
    setWords(
      words.map(word =>
        word.id === id ? { ...word, active: !word.active } : word
      )
    );
  };

  //App 컴포넌트 랜더링
  return (
    <div className="App">
      <Subject />
      <CreateWord 
        kor = {kor}
        en = {en}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <WordList words={words} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
