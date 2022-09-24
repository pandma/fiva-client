import './SearchBar.css';
import { Form, Container, Row, Col } from "react-bootstrap";
import { useReducer } from 'react';
import { useState } from 'react';


const ACTIONS = {
    ONCLICK: "onClick",
    EMPTY: "empty",
    ONCHANGE: "onChange",
    OPEN: "open",
    CLOSE: "close"

};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ONCHANGE:
            return { text: action.value, state: ACTIONS.OPEN };
        case ACTIONS.ONCLICK:
            return { text: action.value, state: ACTIONS.CLOSE };
        case ACTIONS.EMPTY:
            return { text: action.value, state: ACTIONS.CLOSE };
        default:
            return state;
    }
};
const SearchBar = ({ data, setState }) => {
    const [state, dispatch] = useReducer(reducer, { text: "", state: "" });
    const [newData, setNewData] = useState(data);
    const handSearchData = (event) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ONCHANGE, value: event.target.value });
        const name = event.target.value;
        if (name) {
            let res = [];
            data.filter((val, index) => {
                if (val.owner.toLowerCase().includes(name.toLowerCase())) {
                    res.push(val);
                }
                if (index == data.length - 1 && res.length < 1) {
                    dispatch({ type: ACTIONS.EMPTY });

                }
            });
        }
    };

    const handlindData = (event) => {
        event.preventDefault();
        const name = event.target.outerText;
        dispatch({ type: ACTIONS.ONCLICK, value: name });
        if (name) {
            let res = [];
            data.filter(val => {
                if (val.owner.toLowerCase().includes(name.toLowerCase())) {
                    res.push(val);
                }
            });
            setState(() => res);
        }
    };

    return <Container fluid className='searchContainer'>
        <Row>
            <Col md={11} xs={{ span: 10, offset: 1 }}>
                <Form.Control type="text"
                    placeholder="Search"
                    name="search"
                    value={state.text}
                    onChange={handSearchData} />

                {
                    (state.text && state.state === ACTIONS.OPEN) ?
                        <div className='searchs' >
                            {
                                data.filter(val => {
                                    if (!state.text) {
                                        return null;
                                    } else if (val.owner.toLowerCase().startsWith(state.text.toLowerCase())) {
                                        return val.owner;
                                    }
                                }).map((val, key) => {
                                    console.log(val.owner);
                                    if (val.owner) {
                                        return <div className='listItem' value={val.owner} onClick={handlindData} key={key}>
                                            <p>{val.owner}</p>
                                        </div>;
                                    }
                                })
                            }
                        </div> : null
                }
            </Col>
        </Row>
    </Container>;
};

export default SearchBar;