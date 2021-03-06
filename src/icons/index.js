
import image2 from "../../src/assets/img/tech.png";
import image from "../../src/assets/img/active.png";
import dash from "../../src/assets/img/dash.png";
import styled from "styled-components";

const vect=styled.div`

position: absolute;
left: 4.08%;
right: 95.43%;
top: 21%;
bottom: 78.03%;

background: #5C5C5C;
`;

export const DashboardIcon = ()=>{
  return(
    <img src={dash} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
};

export const Tech=()=>{
  return (
      <img src={image2} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
}


export const Basin=()=>{
  return (
    <img src={image2} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
}


export const Active=()=>{
  return (
      <img src={image} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
}

export const UploadIcon = () => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512;" }}
    >
      <g>
        <g>
          <path
            d="M380.032,133.472l-112-128C264.992,2.016,260.608,0,256,0c-4.608,0-8.992,2.016-12.032,5.472l-112,128
        c-4.128,4.736-5.152,11.424-2.528,17.152C132.032,156.32,137.728,160,144,160h64v208c0,8.832,7.168,16,16,16h64
        c8.832,0,16-7.168,16-16V160h64c6.272,0,11.968-3.648,14.56-9.376C385.152,144.896,384.192,138.176,380.032,133.472z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z" />
        </g>
      </g>
    </svg>
  );
};
