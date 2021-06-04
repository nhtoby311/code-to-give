export default function Eraser(props)
{
    return (
        <svg onClick={props.func} width="74" height="140" viewBox="0 0 74 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0H62C68.6274 0 74 5.37258 74 12V135C74 137.761 71.7614 140 69 140H5C2.23858 140 0 137.761 0 135V12Z" fill="white"/>
            <path d="M0 12C0 5.37258 5.37258 0 12 0H62C68.6274 0 74 5.37258 74 12V135C74 137.761 71.7614 140 69 140H5C2.23858 140 0 137.761 0 135V12Z" stroke="black"/>
            <path d="M0 66H74V125H0V66Z" fill="#227DB0"/>
            <rect y="87" width="74" height="17" fill="#65C2F5"/>
        </svg>
    )
}