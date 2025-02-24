import { useState } from "react"
import styled from "styled-components"
import { threeDots, x } from "../assets/img"

const StyledMenu=styled.div<{open:boolean}>`

    > main{
        box-shadow: inset 10 10 10px #f8a100;
        display: ${({open})=>open?'flex':'none'};
        position: absolute;
        top:0;
        right:0;

        width:100%;
        max-width:300px;
        height:100%;
        gap: 0;
        flex:1;
        flex-direction: column;

        > label{
            border-top-left-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background:rgb(170, 170, 170);
            padding: 6px 12px;
            > img{
                width :24px; 
                cursor: pointer;
            }
        }
        > section{
            flex:1;
            padding: 6px 12px;
            Xborder:10px solid green;
            overflow: overlay;
            background: #cdcdcd;
            border-bottom-left-radius: 6px;
        }
    }

    .icon{
        > img{
            width :24px; 
            cursor: pointer;
        }
    }
`

export default function JMenu(){
    const [open,setOpen]=useState(false)
    return <StyledMenu
        open={open}
    >
        <main>
            <label>
                Menu
                <img src={x}
                    onClick={()=>{
                        setOpen(false)
                    }}
                />
            </label>
            <section>
            List<br/>List<br/>List<br/>List<br/>List<br/>List<br/>List<br/>
            </section>
        </main>
        <div className={'icon'}>
            <img src={threeDots}
                onClick={()=>{
                    setOpen(true)
                }}
            />
        </div>
    </StyledMenu>
}