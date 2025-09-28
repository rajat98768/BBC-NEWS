import './App.css';
import React, { Component } from 'react';
import Navbar2 from './components/Navbar2';
import Newsitem from './components/Newsitem';
import LATEST from './components/LATEST';
import Footer from './components/footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    // correct: define articles as a variable, then use it
    const articles =[
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Adolescence: How the Netflix spin-off pulled off an Emmys sweep",
      "description": "The Netflix drama, starring Owen Cooper, explored the impact of smartphones on teenagers.",
      "url": "https://www.bbc.co.uk/news/articles/cd72d98gj58o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4301/live/22dc5b10-91da-11f0-9cf6-cbf3e73ce2b9.jpg",
      "publishedAt": "2025-09-15T07:22:24.6068436Z",
      "content": "The drama's breakout star was Owen Cooper, a Warrington-born actor who was only 14 when the series was filmed. \r\nCooper played the central character, Jamie Miller, a schoolboy who is abruptly woken u… [+1145 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Lord Mandelson: Tories demand answers in letter to Starmer",
      "description": "Conservatives call for release of documents showing what and when the PM knew about the former ambassador's ties to Jeffrey Epstein.",
      "url": "https://www.bbc.co.uk/news/articles/ce32qepq12qo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b7d2/live/de6d3750-91d0-11f0-b391-6936825093bd.jpg",
      "publishedAt": "2025-09-15T06:52:24.7317964Z",
      "content": "In the letter to the prime minister, Tory MP Alex Burghart questioned what and when Sir Keir knew of Mandelson's friendship with Epstein before defending the former ambassador during Prime Minister's… [+1942 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Aldi warns food prices may rise if Budget lifts costs",
      "description": "Giles Hurley says the chancellor must consider any policies which raise business costs 'very carefully',",
      "url": "https://www.bbc.co.uk/news/articles/c0r0zr7ed9yo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/91c9/live/84c16ae0-9168-11f0-9445-855b018b8b05.png",
      "publishedAt": "2025-09-15T06:52:23.1361206Z",
      "content": "Mr Hurley said so far this year, more than £300m had gone into trying to offset the rising cost of goods and keep prices as low as possible.\r\nEven so, supermarket prices for many staple products have… [+1529 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Covid-19: Children and teenagers share impact of pandemic in new report",
      "description": "Children describe positive memories of family time, as well as the darker side of pandemic life online.",
      "url": "https://www.bbc.co.uk/news/articles/cx2jll1wx4ko",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b339/live/5a36db90-8cb1-11f0-82aa-7d0865a885a4.jpg",
      "publishedAt": "2025-09-15T05:37:22.5902664Z",
      "content": "One almost universal experience for children living through the pandemic was much of life shifting to online platforms. \r\nWhile this allowed family connections and friendships to be maintained, Ms Ei… [+984 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "'Killer' child car seats still on sale decade on after warnings",
      "description": "Which? advised families to buy approved seats with a clear orange label indicating they are safe.",
      "url": "https://www.bbc.co.uk/news/articles/c8643d1p85zo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4187/live/6d25a890-8fc1-11f0-9cf6-cbf3e73ce2b9.jpg",
      "publishedAt": "2025-09-15T05:37:19.0755163Z",
      "content": "Which? said it found more than a dozen listings of illegal car seats on websites such as eBay, Little Dreams, ManoMano, Shein and Wish. \r\nOne listing for a child's car seat on eBay warned against usi… [+1056 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Nuclear energy plan unveiled by UK and US, promising thousands of jobs",
      "description": "Key among the plans is a proposal to build up to 12 advanced modular nuclear reactors in Hartlepool.",
      "url": "https://www.bbc.co.uk/news/articles/ckgzevzwxwro",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/06c6/live/6ca4cbf0-9186-11f0-9f13-01e9f580d459.jpg",
      "publishedAt": "2025-09-15T00:52:26.2615327Z",
      "content": "The deal is also aimed at increasing commercial partnerships between British and American companies, with a number of deals set to be announced. \r\nKey among the plans is a proposal from US nuclear gr… [+958 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Newspaper headlines: 'Rest in peace, champ' and 'scramble inside No 10'",
      "description": "The death of former boxer Ricky Hatton and increasing pressure on Starmer leads many of Monday's front pages.",
      "url": "https://www.bbc.co.uk/news/articles/c3drk2k22g7o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a88c/live/e01b2580-91bc-11f0-b391-6936825093bd.jpg",
      "publishedAt": "2025-09-15T00:37:25.0115574Z",
      "content": "Image caption, The Guardian leads on Sir Keir's reaction to the tens of thousands of people who took to the streets of central London at the weekend for a \"Unite the Kingdom\" march organised by far-r… [+405 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Madeleine McCann: Christian Brückner turns down Met Police interview",
      "description": "Christian Brückner is due to be released from prison in Germany in relation to a separate offence.",
      "url": "https://www.bbc.co.uk/news/articles/cr5qd18y8j5o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b062/live/199eed10-84dd-11f0-bdc5-0bac48b207b6.png",
      "publishedAt": "2025-09-15T00:37:23.2307502Z",
      "content": "The prime suspect in the high-profile case of Madeleine McCann's disappearance has declined to be interviewed by the Metropolitan Police, the force has said.\r\nThe Met said an international letter of … [+430 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Ex-London bus driver runs degrading sex-trade ring in Dubai's glamorous neighbourhoods",
      "description": "Young Ugandan women tell BBC they are being lured to Dubai to take part in extreme sex acts.",
      "url": "https://www.bbc.co.uk/news/articles/cx2r9y3kxy9o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1c16/live/c327cfd0-919b-11f0-b391-6936825093bd.jpg",
      "publishedAt": "2025-09-14T23:37:22.372017Z",
      "content": "Monic's relative Michael, who was in the UAE at the time she died, says he tried to get answers.\r\nPolice told him they stopped their investigation, having found drugs and alcohol in the apartment Mon… [+1691 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "BBC investigates Afghan maternal deaths after US aid cuts",
      "description": "The BBC hears devastating accounts of Afghan mothers and babies dying after US-backed clinics shut.",
      "url": "https://www.bbc.co.uk/news/articles/ckgqdneev1no",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d10a/live/fec88e30-8fe3-11f0-b391-6936825093bd.jpg",
      "publishedAt": "2025-09-14T21:22:22.0737793Z",
      "content": "But no reinforcements are coming because of the Taliban government's restrictions on women. Three years ago, all higher education, including medical education was banned for women. Less than a year a… [+1557 chars]"
    }
  ] ;
   
    this.state = {
      articles:articles,  // now this.state.articles is an array, so you can map safely
    };
  }
async componentDidMount() {
  
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2025-08-26&sortBy=publishedAt&apiKey=6d9c4bce646e4ceabb3c01821ef9e3f6";

    const response = await fetch(url);
    console.log("Response status:", response.status);
    const data = await response.json();

 // this.setState({articles: data.articles});
} 

  render() {
    return (
      <div>
        <Navbar2 />
        <LATEST/>
        <h1 style={{ paddingLeft: "43px", marginTop: "10px" ,fontFamily:"fantasy"}}>Top-headlines</h1>
        <section className="news-grid">
          {this.state.articles.map((element) => {
            return (
              <Newsitem
                key={element.url}
                title={element.title?element.title:""}
                imagurl={element.urlToImage?element.urlToImage: "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4301/live/22dc5b10-91da-11f0-9cf6-cbf3e73ce2b9.jpg" }  // using actual image from element
                description={element.description?element.title:""}
                url={element.url}
              />
            );
          })}
        </section>
        <Footer/>
      </div>
    );
  }
}
