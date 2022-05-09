import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import {SendProb} from '../../components/index';
import './solveprb.css';

function SolveProblem({ Problem }) {
    const file_name = Problem;
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./markdown/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
          <div className='prob-question'>
            <Markdown>
                {post}
            </Markdown>
          </div>
          <div className='prob-answer'>
            <SendProb  />
          </div>
        </div>
    );
}

export default SolveProblem;