import './SearchBar.css';
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useCallback } from 'react';


const SearchBar = ({ data, setState, newData, setNewData,
    setIsSearching, setIsLoading }) => {
    const [searchData, setSearchData] = useState("");

    const handSearchData = (event) => {
        setSearchData(event.target.value);
        if (event.target.getAttribute("value")) {
            const searchBy = event.target.getAttribute("value");
            let res = [];
            data.filter(val => {
                if (val.owner.toLowerCase().includes(searchBy.toLowerCase())) {
                    res.push(val);
                }
            });
            if (res.length) {
                console.log(res);
                setState(prev => {
                    prev.push(...res);
                });
                console.log(data);
            }
        }
    };

    // function setSomeState(res) {
    //     setState(prev => {
    //         console.log(prev);
    //         console.log(res);
    //         prev = res;
    //         console.log(prev);
    //         return prev;
    //     }, () => {
    //         setState(prev);
    //     });
    // }

    return <div>
        <Form.Control type="text"
            placeholder="Search"
            name="search"
            onChange={handSearchData} />

        {searchData ?
            <div className='searchs' >
                {
                    data.filter(val => {
                        if (!searchData) {
                            return null;
                        } else if (val.owner.toLowerCase().startsWith(searchData.toLowerCase())) {
                            return val.owner;
                        }
                    }).map((val, key) => {
                        return <div className='listItem' value={val.owner} onClick={handSearchData} key={key}>
                            <p>{val.owner}</p>
                        </div>;
                    })
                }
            </div> : null
        }
    </div>;

};

export default SearchBar;