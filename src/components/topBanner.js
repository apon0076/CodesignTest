import React, {Component, Fragment} from 'react';
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid >
                    <div className="topBanner__img">
                        <div className="topBanner__imgOverlay">
                            <div>
                                <p className="topBanner__heroArea--title">Your local source of high quality images <br/>
                                    and videos directly from their creators</p>
                                <Form className="mt-4 topBanner__formField">
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Search Photos and Videos" />
                                        <Form.Text className="text-muted">
                                            Recommended: summer, food, covid-19, real estate, love
                                        </Form.Text>
                                    </Form.Group>
                                    <Button className="topBanner__searchIcon" type="submit">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;