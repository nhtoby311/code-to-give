import styled from  'styled-components'

const InputBox = styled.div`
    width: 100%;
    position: relative;
    input:focus ~span ,input:valid ~span
    {
        font-size: 12px;
        padding: 15px 25px;
        transform: translateY(-35px);
    }
`
const SpanN = styled.span`
    color: var(--blackColor);
    position: absolute;
    left: 0;
    padding: 15px 0;
    font-size: 18px;
    margin: 10px 25px;
    pointer-events: none;
    -webkit-transition: 0.3s;
    background: white;
    border-radius: 25px;
    transition: 0.3s;
    letter-spacing: 1.2px;
    font-weight: 600;
`

const InputD = styled.input`
    width: 100%;
    padding: 20px 25px;
    border-radius: 25px;
    border: solid 2px var(--blackColor);
    outline: none;
    font-size: 1.4rem;
`


const InputN = styled.input`
    width: 100%;
    padding: 20px 25px;
    border-radius: 25px;
    border: solid 2px var(--blackColor);
    outline: none;
    font-size: 1.4rem;

    &:valid{
        border: solid 2px #05b105;
        color : #077407;
        
        & ~span{
            color: #05b105;
        }
    }
`

const InputF = styled.input`
    width: 100%;
    padding: 20px 25px;
    border-radius: 25px;
    border: solid 2px var(--blackColor);
    outline: none;
    font-size: 1rem;

    &:valid{
        border: solid 2px #05b105;
        color : #077407;
        
        & ~span{
            color: #05b105;
        }
    }
`
const SpanF = styled.span`
    color: var(--blackColor);
    position: absolute;
    left: 0;
    padding: 15px 0;
    font-size: 18px;
    margin: 10px 25px;
    pointer-events: none;
    -webkit-transition: 0.3s;
    background: white;
    border-radius: 25px;
    transition: 0.3s;
    letter-spacing: 1.2px;
    font-weight: 600;
    font-size: 12px;
    padding: 15px 25px;
    transform: translateY(-35px);
`

const InputS = styled.select`
    width: 100%;
    padding: 20px 25px;
    border-radius: 25px;
    border: solid 2px var(--blackColor);
    outline: none;
    font-size: 1rem;
    font-weight: 600;

    &:valid{
        border: solid 2px #05b105;
        color : #077407;
        & ~span{
            color: #05b105;
        }
    }
`


export default function Input(props)
{
    const TypeHandle =()=>{
        switch(props.type){
            case 'file':{
                return (<>
                    <InputF type='file' {...props.register} required="required" />
                    <SpanF>{props.label}</SpanF>
                </>)
            }
            case 'select':{
                return (<>
                    <InputS {...props.register} required>
                        {props.options && props.options.map((ele,ind)=>{
                            return <option key={ind} value={ele.value}>{ele.label}</option>
                        })}
                    </InputS>
                    <SpanF>{props.label}</SpanF>
                </>)
            }
            case 'text':{
                return (<>
                    <InputN type='text' {...props.register} required="required"/>
                    <SpanN>{props.label}</SpanN>
                </>)
            }
            default:{
                return (<>
                    <InputD type={props.type} {...props.register} required="required"/>
                    <SpanN>{props.label}</SpanN>
                </>
                )
            }
        }
    }
    return(
        <InputBox>
            {TypeHandle()}
        </InputBox>
    )
}