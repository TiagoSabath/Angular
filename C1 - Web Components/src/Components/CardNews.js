class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow =  this.attachShadow ({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');
        
        const autor = document.createElement('span');
        autor.textContent = "By " + this.getAttribute("autor") || "By Anonymous";

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const newsImg = document.createElement('img');
        newsImg.src = this.getAttribute("photo") || "./assets/default-profile.jpg";
        cardRight.appendChild(newsImg);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 720px;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: 400;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > p {
            color: rgb(71, 71, 71);
        }
        
        .card_right > img{
            width: 300px;
        }
        `

        return style;
    }
}

customElements.define("card-news", CardNews);