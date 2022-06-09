import React, { useState, useEffect } from 'react';
import './scrambleSentence.css'

const ScrambleSentence = ({ sentence }) => {
    const [scrambleSentence, setScrambleSentence] = useState('');

    const scramble = (str) => {
        var text = str.split('');

        // mix up the sentence randomly using Math.random
        for(var i = text.length - 1; i > 0; i--){
            var j = Math.floor(Math.random() * (i + 1));
            var temp = text[i];
            text[i] = text[j];
            text[j] = temp;
        }

        // Join back up the array and return it
        return text.join('');
    }

    useEffect(() =>{
        let scrambledString = [];

        //split the sentence into seperate words
        const words = sentence.split(' ');

        // for each word either scramble it or push 
        words.forEach(word =>{
            // If the word is of length 2 or less just
            // push it to the array
            if(word.length <= 2){
                scrambledString.push(word);
            }
            // Else scramble the word and push it 
            // to the array
            else{
                scrambledString.push(scramble(word));
            }
        })

        // Join the scrambled array and return it 
        setScrambleSentence(scrambledString.join(' '));
    }, [sentence])

    return (
        <div>
            <p id='scrambled-word'>{scrambleSentence}</p>
        </div>
    )
}

export default ScrambleSentence;