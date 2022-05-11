import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

<style className="css"></style>
function Navbar(){

    return (
        <header>
          <nav className="container">
            <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>
              <a href="https://github.com/amroberto">
                <div className='dsmovie-contact-container'>
                  <GithubIcon />
                  <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
              </a>
            </div>       
          </nav>
        </header>
    );
}

export default Navbar;