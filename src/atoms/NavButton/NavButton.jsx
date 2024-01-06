

export const NavButton = ({click, isActive, imgSrc, children}) => {

    console.log(imgSrc)

    return(
        <button
            className={'navButton sideBarButton' + (isActive ? ' active' : '')}
            onClick={click}
        >
            <div className="wrapper">
                {imgSrc &&
                    <div>
                        <img src={imgSrc} alt="icon" />
                    </div>
                }
                <p className="buttonText">
                    {children}
                </p>
            </div>
        </button>
    )
}