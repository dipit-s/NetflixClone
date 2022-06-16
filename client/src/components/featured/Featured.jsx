import { InfoOutlined, More, PlayArrow } from "@material-ui/icons";
import "./Featured.scss"

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type==='movie'? "Movies" : "Series" }</span>
          <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">crime</option>
          <option value="fantasy">fantasy</option>
          <option value="historical">historical</option>
          <option value="thriller">thriller</option>
          <option value="suspense">suspense</option>
          <option value="animation">animation</option>
          

            
          </select>
        </div>
      )}
      <img src="https://wallpaperaccess.com/full/1901974.jpg" alt="https://wallpaperaccess.com/full/1901974.jpg" />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/The_Mandalorian.svg" alt="https://upload.wikimedia.org/wikipedia/commons/9/96/The_Mandalorian.svgs" />
            <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio totam autem quia eveniet necessitatibus nihil, cupiditate amet exercitationem harum expedita error suscipit omnis temporibus voluptatibus, adipisci quae laboriosam rem aperiam.</span>
            <div className="buttons">
              <button className="play"><PlayArrow/><span>Play</span></button>
              <button className="more"><InfoOutlined/> <span>Info</span></button>
             
            </div>
        </div>
    </div>
  )
}

export default Featured;