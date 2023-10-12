import { Row, Col, Container, Card, CardBody } from "react-bootstrap";
import { Fragment, useState } from "react";

const Wheather = () => {

    // Create usestate for input values
    const [city, setcity] = useState("")

    // create usestare for upadating the data
    const [result, setresult] = useState('')


    // Onsubmit handler for form submission
    const onsubmitHandler = (e) => {
        e.preventDefault(); // PAGE REFRESH KAKUNTA AND MANAIKI CONSOLE LO OUTPUT CHUDALI ANI ANTE EDHI VADALI

        // API for whether app
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response => response.json()
            ).then(data => {
                const kelvin = data.main.temp;
                const celcius = kelvin - 273.15;
                setresult("Temperature at " + "  " + city + "  " + Math.round(celcius) + "°C")
            }).catch((err) => console.log(err))
        setcity("")
    };


    return (
        <Fragment>
            <Container>
                <Row>

                    <Col xs={6} md={6} className="offset-md-3 my-5">
                        <Card>
                            <CardBody>
                                <h2 className="text-center py-3">Wheather App</h2>
                                <form onSubmit={onsubmitHandler}>
                                    <input type="text" className="form-control" placeholder="Enter any city name to see the temperature...." value={city} onChange={(e) => setcity(e.target.value)} /><br />
                                    <center><button type="submit" className="button">submit</button></center>

                                </form> <br />

                                <h4 className="text-center">{result}</h4>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
};

export default Wheather;