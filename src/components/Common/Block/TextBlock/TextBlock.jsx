import styled from "styled-components"
import TextBlockLine from "./TextBlockLine/TextBlockLine"
const Tbx = styled.div`
    width: 100%;
    margin-top: 20px;
    overflow:auto;
    max-height: 500px;
`
export default function TextBlock(props) {
    return (
        <Tbx>
            {props.data && props.data.map((item, index) => <TextBlockLine key={index} name={item.name} method={item.method} quiz_name={item.quiz_name} date={item.date}></TextBlockLine>)}
        </Tbx>
    )
}
