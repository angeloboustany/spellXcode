import React, {useContext} from 'react';
import { DataContext } from '../../Pages/problems/DataContext';

export default function Probs({ Problems }) {

    const {setQuestions } = useContext(DataContext);

  return (
        <div id="profile">
            {
                Problems.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">            
                            <div className="info">
                                <h3 className='name text-dark'>{value.pName}</h3>    
                                <span>{value.pCategory +" "+ value.pContest}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>Points:{value.pPoint}</span>
                            <span>Solved:{value.pSub}</span>
                            <button className="btn-primary" onClick={() => setQuestions(value.pName)}>Solve</button>
                        </div>
                    </div>
                    )
                )
            }
        </div>
  )
}
/*
function Item(data){
    return (
        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">            
                            <div className="info">
                                <h3 className='name text-dark'>{value.pName}</h3>    
                                <span>{value.pCategory +" "+ value.pContest}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>Points:{value.pPoint}</span>
                            <span>Solved:{value.pSub}</span>
                            
                        </div>
                    </div>
                    )
                )
            }
        </> 
    )
}
*/