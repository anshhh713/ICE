import './footer.css'
import type { FC } from 'react'
type FooterProps = {
    content: string
}
const Footer: FC<FooterProps> = (props) => {
    return (
        <div className="footer">
            <p>{props.content}</p>
        </div>
    )
}

export default Footer