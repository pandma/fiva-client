import './SearchBar.css';
import { Form } from "react-bootstrap";
import { useReducer } from 'react';


const ACTIONS = {
    ONCLICK: "onClick",
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
        default:
            return state;
    }
};
const SearchBar = ({ data, setState }) => {
    const [state, dispatch] = useReducer(reducer, { text: "", state: "" });

    const handSearchData = (event) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ONCHANGE, value: event.target.value });
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

    return <div>
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
                            if (val.owner) {
                                return <div className='listItem' value={val.owner} onClick={handlindData} key={key}>
                                    <p>{val.owner}</p>
                                </div>;

                            } else {
                                return <div className='listItem' key={key}>
                                    <p>Sin resultado para la busqueda</p>
                                </div>;
                            }
                        })
                    }
                </div> : null
        }
    </div>;
};

export default SearchBar;