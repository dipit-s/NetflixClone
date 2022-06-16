import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listitem/ListItem';
import { useRef, useState } from 'react';
import './list.scss';

function List() {
    const [slidenumber, setslidenumber]=useState(0);

    const listRef= useRef();

    const handleClick =(direction)=>{
        let distance= listRef.current.getBoundingClientRect().x -50;
        if(direction=="right"&&slidenumber<5)
        {
            setslidenumber(slidenumber+1);
            listRef.current.style.transform = `translateX(${-230 +distance}px)`;
        }
        if(direction=="left"&&slidenumber>0)
        {
            setslidenumber(slidenumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`;
        }
    }
  return (
    <div className='List'>
        <span className='listTitle'>Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderarrow left' onClick={()=> handleClick("left")}/>
            <div className="container" ref={listRef}>
                <ListItem index={0} />
                <ListItem index={1} />
                <ListItem index={2} />
                <ListItem index={3} />
                <ListItem index={4} />
                <ListItem index={5} />
                <ListItem index={6} />
                <ListItem index={7} />
                <ListItem index={8} />
                <ListItem index={9} />
            </div>
            <ArrowForwardIosOutlined className='sliderarrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}


export default List
