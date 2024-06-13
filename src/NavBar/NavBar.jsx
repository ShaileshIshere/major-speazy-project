import './NavBar.css'

export default function NavBar() {
    return(
        <div id="NavBar" className="flex justify-between align-centerl">
            <div id="logo">

            </div>
            <div id="info" className="flex justify-between align-centerl" >
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Service</h3>
                <h3>Contact</h3>
            </div>
            <button>
                join now
            </button>
        </div>
    );
}