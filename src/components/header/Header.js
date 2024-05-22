import './Header.css'
import rdSupplierLogo from '../../images/logos/rdsupplier.png'
import SearchBar from '../../components/searchBar/SearchBar'
import Profile from '../../components/profile/Profile'

function Header(params) {
    return(
        <>
        <div className="todo mt-3 whit"> 
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-3"><img src={rdSupplierLogo} className="img" /></div>
                <div className="col-6 d-flex justify-content-center">
                    <SearchBar></SearchBar>
                </div>
                <div className="col-3"><Profile></Profile></div>
            </div>
        </div>
        </div>
        
        </>
    )
    
}

export default Header