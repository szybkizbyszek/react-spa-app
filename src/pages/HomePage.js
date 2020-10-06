import React from 'react';
import Article from '../components/Article'

const HomePage = () => {

    const articles = [
        {
            id: 1,
            title: "Czym jest teoria strun?",
            author: "Jan Nowak",
            text: "1111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"
        },
        {
            id: 2,
            title: "Czym jest paradoks fermiego?",
            author: "Ania Kwiatkowska",
            text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
        },
        {
            id: 3,
            title: "Ciemna materia i ciemna energia?",
            author: "Jan Kowalski",
            text: "4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
        }
    ]

    const article = articles.map( item => (
        <Article key={item.id} {...item}/>
    ))
    return ( 
        <div className='Home'>
            <h1>Dzień dobry! Oto lista nowości!</h1>
            {article}
        </div>
     );
}
 
export default HomePage;