import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';



const Main = () => {
    const [sentence, setSentence] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() =>{
        axios.get(`http://localhost:3001/sentence/${pageNumber}`).then(
            res => {
                console.log(res.data.data.sentence);
                setSentence(res.data.data.sentence);
            }
        )
    }, [pageNumber, sentence])

    return(
        <div className='main'>
            <Container className='App'>
                {sentence}
            </Container>
        </div>
    )
}

export default Main;