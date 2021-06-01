import Button from "../../components/Common/Button/Button";
import './Home.scss'
import Avatar from "../../components/Avatar/Avatar";
import TextBlock from "../../components/Common/TextBlock/TextBlock"
export default function Home() {
    return (
        <div className="container">
            <Button content="Submit"/>
            <Avatar point="12" name="John"/>
            <TextBlock data = "[1,2,3,4,5]"/>
            <h1>abcd</h1>
            <h2>abcd</h2>
            <h3>abcd</h3>
        </div>
    )
}