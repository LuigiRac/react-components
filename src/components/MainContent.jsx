


function MainContent() {

    const image = "/img/polmoni.png"

    return (
        <main>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Titolo del post</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestiae dolor aspernatur neque hic omnis alias rem perspiciatis sapiente numquam.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </main>
    );
};



export default MainContent