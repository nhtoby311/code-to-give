import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthContext"


const SmMenuItem =styled.div`
    padding: 10px 70px;
    text-align: center;
    margin: 15px 0px;
    border-radius: 10px;
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`


export default function SMItem(props){
    const {logout} = useContext(AuthContext)
    const handleData = ()=>{
        switch(props.data){
            case 'My Profile':{
                return (
                    <StyledLink to="/profile">
                        <SmMenuItem onClick={props.close} >
                            <p>{props.data}</p>
                        </SmMenuItem>
                    </StyledLink>
                )
            }
            case 'Logout':{
                return(
                    <SmMenuItem onClick={()=>{
                        props.close()
                        logout()
                        }}>
                        <p>{props.data}</p>
                    </SmMenuItem>
                )
            }
            default:{
                return(
                    <SmMenuItem onClick={props.close}>
                        <p>{props.data}</p>
                    </SmMenuItem>
                )
            }
        }
    }
    return(
        <>
            {handleData()}
        </>
    )
}