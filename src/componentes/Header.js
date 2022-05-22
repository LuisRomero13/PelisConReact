import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <Link To="/">Home</Link>
                    <Link To="/listado">Listado Home</Link>
                    <Link To="/contac">Contac</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;