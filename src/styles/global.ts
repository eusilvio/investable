import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }
    
    body {        
        background: radial-gradient(#403850,#30283D);
        color:#FFF;
        height:100vh;
        -webkit-font-smoothing: antialiased;
        font-family: museo-sans, sans-serif;
    }

    body,input,button{
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        font-weight:normal;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight:500;
    }
    h1{
        font-size:40px;
    }
    h2{
        font-size:20px;
        font-weight:300
    }
    button {
        cursor: pointer;
    }

    a{
        color:#FFF;
        text-decoration:none;
    }

    #root{
        height:100%;
    }
    /* width */
::-webkit-scrollbar {
  width: 10px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: #403850;
  border-radius:4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #30283D;
  border-radius:4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #E43959;
}
`;
