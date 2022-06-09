import React, { useEffect, useState, useRef} from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import axios from 'axios';
import ScrambleSentence from './Scramble/ScrambleSearch';



const Main = () => {
    const [sentence, setSentence] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [userInput, setUserInput] = useState('')
    const [letters, setLetters] = useState([]);
    const inputs = useRef([]);
    const words = useRef([]);

    useEffect(() =>{
        const response = axios.get(`http://localhost:3001/sentence/${pageNumber}`);

        response.then(res =>{
            setSentence(res.data.data.sentence);
            setLetters(sentence.split(''));
        })
    }, [pageNumber, sentence])

    const handleChange = (event, index) => {
        let input;
        if((index + 1 !== inputs.current.length) && event.target.value !== ''){
            input = inputs.current[index + 1];

            console.log(input);
            input.focus();
            console.log(input);
        }
        if(inputs.current[index].value.toLowerCase() === letters[index].toLowerCase()){
            let input = inputs.current[index];
            input.style.backgroundColor ='#4caf50';
        }
        if(inputs.current[index].value !== ''){
            words.current.push(inputs.current[index].value);
          }
        // Adding the new character to current input
        setUserInput(userInput + event.currentTarget.value);
    }

    const handleEvent = (event, index) => {
        let input;
        if(event.keyCode === 8){
            words.current.pop();
            if(index !== 0){
                input = inputs.current[index - 1];
                input.style.backgroundColor = '#e1e1e1';

                input.focus();
            }
            if(index === inputs.current.length){
                input = inputs.current[index];
                inputs.current = '';
                input.style.backgroundColor = '#e1e1e1';
            }
        }
    }

    const handleClick = () =>{
        setScore(score + 1);
        setPageNumber(pageNumber + 1);
        words.current = [];
        inputs.current.forEach(input =>{
            input.value = "";
            input.style.backgroundColor = '#e1e1e1'
        })
    }
    console.log(words.current);

    return(
        <div className='main'>
            <Container className='App'>
                {score < 10 ?(
                    <div>
                        <ScrambleSentence sentence={sentence}/>
                        <div className='text'>
                            Guess the sentence! Start Typing
                        </div>
                        <div className='text'>
                            The yellow blocks are meant for spaces
                        </div>
                        <div className='score'>
                            Score: {score}
                        </div>
                        <div className='guesser'>
                            {letters.map((letter, index) => {
                                if(letter === ' '){
                                    return( 
                                        <>
                                            <input 
                                                className='space-grid'
                                                maxLength='1'
                                                style={{backgroundColor: '#ffb74d'}}
                                                key={index}
                                                onChange={(event) => handleChange(event, index)}
                                                onKeyDown={(event) => handleEvent(event, index)}
                                                ref={el => inputs.current[index] = el}
                                            />
                                            <br />
                                        </>
                                    );
                                }
                                else{
                                    return(<>
                                        <input 
                                            className='grid'
                                            maxLength='1'
                                            key={index}
                                            onChange={(event) => handleChange(event, index)}
                                            onKeyDown={(event) => handleEvent(event, index)}
                                            ref={el => inputs.current[index] = el}
                                        />
                                    </>
                                    )
                                }
                            })}

                            {words.current.join('').toLowerCase() === sentence.toLowerCase()
                            ? (<div>
                                <br />
                                <button 
                                    className='next'
                                    onClick={handleClick}
                                >
                                    Next
                                </button>
                            </div>)
                            : null
                            }
                        </div>
                    </div>
                ): <div> You win</div>}
            </Container>
        </div>
    );
}

export default Main;