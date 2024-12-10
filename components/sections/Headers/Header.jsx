import HeaderData from "@/data/sections/mainheader"
import Link from "next/link"
import "./HeaderStyle.css"

export default function MainHeader(){
    const {logo, menu, actions} = HeaderData

    return (
        <header className="">
            <nav className="container flex flex-col md:flex-row justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="Luxe By Dnbl Logo" />
                </div>
                <div className="flex gap-4 items-center">
                    {
                        menu?.map((item, key)=> (
                            <Link 
                                href={item.href}
                                key={key}
                            >{item.label}</Link>
                        ))
                    }
                </div>
                <div className="flex gap-4 items-center text-sm">
                    {
                        actions?.map((item, key)=> (
                            <Link 
                                href={`/${item.label}`}
                                key={key}
                            >
                                <div dangerouslySetInnerHTML={{__html: item.icon}} />
                                <span>{item.label}</span>
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}