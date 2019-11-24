import React from "react" ; 
import lozad from "lozad" ; 


class LazyLoad extends React.Component{
    constructor(){
        super(); 
        this.observer = lozad();
    }

    componentDidMount(){
        this.observer.observe();
    }
    
    render(){
        return(
            <React.Fragment>
                <img className = "lozad"  data-src = "https://cf.nearsay.com/sites/default/files/styles/480x240/public/content_images/mililani-town-center_pet_clinic.jpg?itok=u89UhQb7"  width = "720px"></img>
                <img className = "lozad"  data-src = "https://dcist.com/wp-content/uploads/sites/3/2019/04/Gem2-1500x1346.jpg"  width = "720px"></img>
                <img className = "lozad"  data-src =  "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-11/cat.jpeg?itok=1jQxJ9y_"  width = "720px"></img>
                <img className = "lozad"  data-src =  "https://cnet1.cbsistatic.com/img/ZQ1SdMpc8gakx7aha1ikOzswYk8=/940x0/2019/11/05/eec14591-afd1-467b-9ced-3f972de6aefa/gettyimages-1140444776.jpg"  width = "720px"></img>
                <img className = "lozad"  data-src =  "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_teaser_image/2019-10/cat-2068462_1920.jpg?itok=3vtvMyZX"  width = "720px"></img>
                <img className = "lozad"  data-src =  "https://www.washingtonian.com/wp-content/uploads/2019/07/Sapphire-2-2048x2048.jpg"  width = "720px"></img>
                <img className = "lozad"  data-src =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UjlfQ2bDZ91Jf08Ejw3uSZs3S5yOc_Pxvbzfj5Uox6_td7e0&s"  width = "720px"></img>
            </React.Fragment>

        );
    }

}

export default LazyLoad 