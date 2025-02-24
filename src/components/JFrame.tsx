import styled from "styled-components"
import { x } from "../assets/img"

const StyledFrame=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: -1px -1px 2px #333333;
    flex:1;
    overflow: hidden;
    background:#ebebeb;
    border-radius: 8px;
    color:#2e302f;
    font-weight: bold;

    > section{
        .close{
            display: flex;
            justify-content: end;
            padding: 8px 12px 0 12px;
            > img{
                width :24px; 
                cursor: pointer;
            }
        }

        .nav{
            font-size:12px;
            margin-left: 20px;
        }
        .title{
            margin-left: 20px;
            padding: 12px 0;
        }
    }
`

export default function JFrame(props:any){
    return <StyledFrame
        className={'j-frame'}
    >
        <section>
            <nav className={'close'}>
                <img src={x} />
            </nav>
            {
                props.nav!=null && <nav className={'nav'}>{props.nav}</nav>
            }
            
            {
                props.title!=null && <div className={'title'}>{props.title}</div>
            }
        </section>
        {props.children}
    </StyledFrame>
}