import Block from '../../components/Common/Block/Block';
import './Home.scss'

export default function Home() {
    return (
        <div className="container home-cont">
            <Block title="new-assignment"/>
            <Block title="reminder"/>
            <Block title="best-student" type="slide"/>
        </div>
    )
}