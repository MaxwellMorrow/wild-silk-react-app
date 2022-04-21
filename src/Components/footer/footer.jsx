import "./footer.styles.scss"

export default function Footer(){
    const year = new Date().getFullYear()
    return(
        <div className="footer">
            {year} © Wild Silk Soap Store
        </div>
    )
}