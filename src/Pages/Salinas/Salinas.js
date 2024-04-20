import './Salinas.css';

function Salinas() {
    return (
        <div className="salinas_toplevel">
            <header>
                <h1>Nice</h1>
                <p>Hi, I'm Logs. Thanks for visiting my page!</p>
            </header>
            <main>
                <section className="introduction">
                    <h2>Introduction</h2>
                    <p>
                        I got carried in CS 1114 by one of the club members
                    </p>
                </section>
                <section className="hobbies">
                    <h2>Hobbies</h2>
                    <ul>
                        <li>I'm him</li>
                        <li>For some I walked to campus today</li>
                        <li>Ice cream is mid</li>
                        {/* Add your hobbies here */}
                    </ul>
                </section>
            </main>
            <footer>
                <p>Thanks for visiting!</p>
            </footer>
        </div>
    );
}

export default Salinas;