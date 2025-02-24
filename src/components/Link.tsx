import styled from "styled-components"
import { copy, qrcode } from "../assets/img"

const StyledLink=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    >main{
        padding: 20px;
        display: flex;   
        justify-content: center;
        align-items: center;
        overflow: hidden;


        >img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    >nav{
        display:flex;
        padding:0 20px;
        > div{
            white-space: nowrap;
            display: flex;
            padding-right: 30px;
            >button{
                margin:0 6px;
                border: 0;
                border-radius: 4px;
                display: flex;
                justify-content: center;
                padding:4px;
                width:24px;
                height:24px;
                background: #0b8cf0;
                >img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
`
export default function Link(){
    return <StyledLink>
        <nav>
            <div>
                ID:X58E947 
                <button>
                    <img src={copy}
                        onClick={()=>{
                            navigator.clipboard.writeText('X58E947')
                        }}
                    />
                </button>
            </div>
            <div>
                Link 
                <button>
                    <img src={copy}
                        onClick={()=>{
                            navigator.clipboard.writeText('https://www.classswift.viewsonic.io/')
                        }}
                    />
                </button>
            </div>
        </nav>
        <main>
            <img src={qrcode}/>
        </main>
    </StyledLink>
}