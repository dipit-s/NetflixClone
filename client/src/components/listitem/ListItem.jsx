import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './Listitem.scss'

export default function ListItem({index}) {
    const[isHovered, setisHovered] = useState(false);
    const trailer ="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
  return (

    <div className='listItem' 
    style={{left:isHovered && index * 227.5 -50}}
    onMouseEnter={()=>setisHovered(true)} 
    onMouseLeave={()=>setisHovered(false)}
    >
        <img src="https://wallpaperaccess.com/full/1901974.jpg" alt="https://upload.wikimedia.org/wikipedia/commons/9/96/The_Mandalorian.svg" />
        {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop />
        <div className='itemInfo'>
            <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownAltOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>1 Hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>2020</span>
            </div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perferendis! Deserunt similique maxime sit placeat eos,
             molestias.</div>
             <div className="genre">Action</div>
        </div>
        </>)
        }
    </div>

  )
}
