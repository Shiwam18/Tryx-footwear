const Navigation = () =>{
    return(
    
        
    
        <nav>
            <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="logo"/></div>
            
            <div className="category">
                
                <a href="#">New & Featured</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Sale</a>
                <a href="#">SNKRS</a>
                
            </div>
            <div className="search">
                
                <button type="submit">search</button>
                <a href="#"><img src="https://www.svgrepo.com/download/13666/heart.svg" alt="" srcset="" /></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/275/275790.png" alt="" /></a>
            </div>
        </nav>
    );
};

export default Navigation;