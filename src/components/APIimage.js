import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown,faArrowCircleDown,faPlusCircle,faHeart} from "@fortawesome/free-solid-svg-icons";
import userImg from "./../asset/images/user.png";

export default function APIimage() {
    const [getimages, Setgetimages]=useState([]);
    const [getRecnt, SetgetRecnt]=useState(null);
    const [MostView, SetMostView]=useState(null);
    const [MostDownload, SetMostDownload]=useState(null);
    const [MostAppriciate, SetMostAppriciate]=useState(null);


    useEffect(()=> {
        const url = 'https://pixabay.com/api/?key=20972198-1b31bd6342e0f62ff2a41cda3&fbclid';
        fetch(url,{
            crossDomain:true,
            method: 'GET',
        })
            .then(response => response.json())
            .then((data) =>Setgetimages(data.hits));
    },[]);

console.log(getimages);


    useEffect(()=> {
        const afterRecent=getimages.sort((a,b)=>{return a.id-b.id});
        Setgetimages(afterRecent);
        SetMostView("");
        SetMostDownload("");
        SetMostAppriciate("");
    },[getRecnt]);



    useEffect(()=> {
        const afterView=getimages.sort((a,b)=>{return a.views-b.views});
        Setgetimages(afterView);
        SetgetRecnt("");
        SetMostDownload("");
        SetMostAppriciate("");
    },[MostView]);

    useEffect(()=> {
        const afterView=getimages.sort((a,b)=>{return a.downloads-b.downloads});
        Setgetimages(afterView);
        SetgetRecnt("");
        SetMostView("");
        SetMostAppriciate("");
    },[MostDownload]);

    useEffect(()=> {
        const afterView=getimages.sort((a,b)=>{return a.favorites-b.favorites});
        Setgetimages(afterView);
        SetgetRecnt("");
        SetMostDownload("");
        SetMostView("");
    },[MostAppriciate]);


    console.log(getimages);


 return (
        <Container>
            <div className="mt-3">
                <div className="apiImg__filteringSection">
                    <div className="apiImg__filteringMenus">
                        <ul>
                            <li><a href="#">All</a></li>
                            <li><a href="#">Photos</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Freebies</a></li>
                            <li><a href="#">360</a></li>
                        </ul>
                    </div>

                    <div className="apiImg__filteringDropdown">
                        <Dropdown>
                            <Dropdown.Toggle className="apiImg__filteringDropdownBtn">
                                Recommended <FontAwesomeIcon icon={faSortDown}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="apiImg__filteringDropdown--item" onClick={()=>SetgetRecnt('new')} >Most Recent</Dropdown.Item>
                                <Dropdown.Item className="apiImg__filteringDropdown--item" onClick={()=>SetMostView('mostview')}>Most Viewed</Dropdown.Item>
                                <Dropdown.Item className="apiImg__filteringDropdown--item" onClick={()=>SetMostDownload('download')}>Most Downloaded</Dropdown.Item>
                                <Dropdown.Item className="apiImg__filteringDropdown--item" onClick={()=>SetMostDownload('MostAppriciate')}>Most Appreciated</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Row>
                {
                    getimages.map((item)=>{
                    return(
                        <Col md={4} className="mt-3 portfolio__imageSection">
                            <img className="portfolio__image" src={item.webformatURL} alt={item.tags} key={item.id}/>
                            <div className="portfolio__imageHoverItems">
                                <img className="apiImg__uploaderImg" src={userImg} alt="user"/>  <span className="apiImg__uploaderName">Goku</span>
                                <FontAwesomeIcon className="portfolio__image--downloadBtn" icon={faArrowCircleDown}/>
                                <FontAwesomeIcon className="portfolio__image--add" icon={faPlusCircle}/>
                                <FontAwesomeIcon className="portfolio__image--favorite" icon={faHeart}/>
                            </div>
                        </Col>

                    )
                })
                }
            </Row>
        </Container>
    )
}
