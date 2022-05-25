import {Link} from 'react-router-dom';

//componentes
import Buscador from './Buscador';

function Header(props){
    return(
        <header>
            <nav>
                <ul>
                    <Link To="/">Home</Link>
                    <Link To="/listado">Listado Home</Link>
                    <Link To="/contac">Contac</Link>
                </ul>
                <Buscador/>
            </nav>
        </header>
    )
}

export default Header;