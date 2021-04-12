import React, {Component} from 'react';

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

    this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
    });
    }    
}

    render() {
        return (
            <div>
            <button className="btn btn-outline-dark mt-2" onClick={this.showMenu}>
              Lajittele
            </button>
            
            {
              this.state.showMenu
                ? (
                  <div
                    className="menu"
                    ref={(element) => {
                      this.dropdownMenu = element;
                    }}
                  >
                    <button className="btn btn-outline-light"> 1 </button>
                    <button className="btn btn-outline-light"> 2 </button>
                    <button className="btn btn-outline-light"> 3 </button>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
    }
    
export default Dropdown;